import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProblemOrThrowArgs } from "./args/FindFirstProblemOrThrowArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class FindFirstProblemOrThrowResolver {
  @Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblemOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstProblemOrThrowArgs) args: FindFirstProblemOrThrowArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).problem.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findFirstOrThrow')),
    });
  }
}
