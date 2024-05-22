import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyProblemArgs } from "./args/FindManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class FindManyProblemResolver {
  @Query(_returns => [Problem], {
    nullable: false
  })
  async problems(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyProblemArgs) args: FindManyProblemArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findMany');
    return getPrismaFromContext(ctx).problem.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findMany')),
    });
  }
}
