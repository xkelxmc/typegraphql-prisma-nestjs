import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProblemArgs } from "./args/UpsertOneProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class UpsertOneProblemResolver {
  @Mutation(_returns => Problem, {
    nullable: false
  })
  async upsertOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneProblemArgs) args: UpsertOneProblemArgs): Promise<Problem> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'upsert');
    return getPrismaFromContext(ctx).problem.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'upsert')),
    });
  }
}
