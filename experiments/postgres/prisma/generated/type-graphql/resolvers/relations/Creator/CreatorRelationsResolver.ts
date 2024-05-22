import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Creator } from "../../../models/Creator";
import { Problem } from "../../../models/Problem";
import { CreatorLikesArgs } from "./args/CreatorLikesArgs";
import { CreatorProblemsArgs } from "./args/CreatorProblemsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class CreatorRelationsResolver {
  @ResolveField(_type => [Problem], {
    nullable: false
  })
  async likes(@Root() creator: Creator, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreatorLikesArgs) args: CreatorLikesArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', '', '');
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      where: {
        id: creator.id,
      },
    }).likes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', '', '')),
    });
  }

  @ResolveField(_type => [Problem], {
    nullable: false
  })
  async problems(@Root() creator: Creator, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreatorProblemsArgs) args: CreatorProblemsArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', '', '');
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      where: {
        id: creator.id,
      },
    }).problems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', '', '')),
    });
  }
}
