import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Creator } from "../../../models/Creator";
import { Problem } from "../../../models/Problem";
import { ProblemCreatorArgs } from "./args/ProblemCreatorArgs";
import { ProblemLikedByArgs } from "./args/ProblemLikedByArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Problem)
export class ProblemRelationsResolver {
  @ResolveField(_type => [Creator], {
    nullable: false
  })
  async likedBy(@Root() problem: Problem, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => ProblemLikedByArgs) args: ProblemLikedByArgs): Promise<Creator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', '', '');
    return getPrismaFromContext(ctx).problem.findUniqueOrThrow({
      where: {
        id: problem.id,
      },
    }).likedBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', '', '')),
    });
  }

  @ResolveField(_type => Creator, {
    nullable: true
  })
  async creator(@Root() problem: Problem, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => ProblemCreatorArgs) args: ProblemCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', '', '');
    return getPrismaFromContext(ctx).problem.findUniqueOrThrow({
      where: {
        id: problem.id,
      },
    }).creator({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', '', '')),
    });
  }
}
