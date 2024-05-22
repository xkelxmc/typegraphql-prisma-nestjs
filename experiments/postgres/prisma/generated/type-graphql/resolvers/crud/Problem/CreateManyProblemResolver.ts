import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyProblemArgs } from "./args/CreateManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class CreateManyProblemResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyProblemArgs) args: CreateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'createMany');
    return getPrismaFromContext(ctx).problem.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'createMany')),
    });
  }
}
