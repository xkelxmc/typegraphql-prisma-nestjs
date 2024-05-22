import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyProblemArgs } from "./args/UpdateManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class UpdateManyProblemResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyProblemArgs) args: UpdateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'updateMany');
    return getPrismaFromContext(ctx).problem.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'updateMany')),
    });
  }
}
