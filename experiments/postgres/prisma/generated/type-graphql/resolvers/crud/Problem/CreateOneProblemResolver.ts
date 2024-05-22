import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProblemArgs } from "./args/CreateOneProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class CreateOneProblemResolver {
  @Mutation(_returns => Problem, {
    nullable: false
  })
  async createOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneProblemArgs) args: CreateOneProblemArgs): Promise<Problem> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'create');
    return getPrismaFromContext(ctx).problem.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'create')),
    });
  }
}
