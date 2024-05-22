import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByProblemArgs } from "./args/GroupByProblemArgs";
import { Problem } from "../../../models/Problem";
import { ProblemGroupBy } from "../../outputs/ProblemGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class GroupByProblemResolver {
  @Query(_returns => [ProblemGroupBy], {
    nullable: false
  })
  async groupByProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByProblemArgs) args: GroupByProblemArgs): Promise<ProblemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'groupBy');
    return getPrismaFromContext(ctx).problem.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
