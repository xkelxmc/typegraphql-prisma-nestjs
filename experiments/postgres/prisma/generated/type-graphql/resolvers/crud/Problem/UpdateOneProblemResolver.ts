import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProblemArgs } from "./args/UpdateOneProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class UpdateOneProblemResolver {
  @Mutation(_returns => Problem, {
    nullable: true
  })
  async updateOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneProblemArgs) args: UpdateOneProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'update');
    return getPrismaFromContext(ctx).problem.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'update')),
    });
  }
}
