import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProblemArgs } from "./args/DeleteOneProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class DeleteOneProblemResolver {
  @Mutation(_returns => Problem, {
    nullable: true
  })
  async deleteOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneProblemArgs) args: DeleteOneProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'delete');
    return getPrismaFromContext(ctx).problem.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'delete')),
    });
  }
}
