import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs";
import { Problem } from "../../../models/Problem";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class AggregateProblemResolver {
  @Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateProblemArgs) args: AggregateProblemArgs): Promise<AggregateProblem> {
    return getPrismaFromContext(ctx).problem.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'aggregate'),
    });
  }
}
