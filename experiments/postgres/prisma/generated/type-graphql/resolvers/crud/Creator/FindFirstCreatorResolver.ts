import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCreatorArgs } from "./args/FindFirstCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class FindFirstCreatorResolver {
  @Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCreatorArgs) args: FindFirstCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findFirst');
    return getPrismaFromContext(ctx).creator.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findFirst')),
    });
  }
}
