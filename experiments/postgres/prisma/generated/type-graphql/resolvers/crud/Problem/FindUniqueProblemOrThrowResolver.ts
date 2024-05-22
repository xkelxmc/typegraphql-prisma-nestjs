import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProblemOrThrowArgs } from "./args/FindUniqueProblemOrThrowArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class FindUniqueProblemOrThrowResolver {
  @Query(_returns => Problem, {
    nullable: true
  })
  async getProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueProblemOrThrowArgs) args: FindUniqueProblemOrThrowArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).problem.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findUniqueOrThrow')),
    });
  }
}
