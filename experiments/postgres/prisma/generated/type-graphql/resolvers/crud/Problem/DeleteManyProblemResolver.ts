import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyProblemArgs } from "./args/DeleteManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class DeleteManyProblemResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyProblemArgs) args: DeleteManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'deleteMany');
    return getPrismaFromContext(ctx).problem.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'deleteMany')),
    });
  }
}
