import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProblemArgs } from "./args/FindFirstProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class FindFirstProblemResolver {
  @Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstProblemArgs) args: FindFirstProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findFirst');
    return getPrismaFromContext(ctx).problem.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findFirst')),
    });
  }
}
