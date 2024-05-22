import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCreatorOrThrowArgs } from "./args/FindUniqueCreatorOrThrowArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class FindUniqueCreatorOrThrowResolver {
  @Query(_returns => Creator, {
    nullable: true
  })
  async getCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCreatorOrThrowArgs) args: FindUniqueCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findUniqueOrThrow')),
    });
  }
}
