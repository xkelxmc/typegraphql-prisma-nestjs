import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCreatorOrThrowArgs } from "./args/FindFirstCreatorOrThrowArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class FindFirstCreatorOrThrowResolver {
  @Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreatorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCreatorOrThrowArgs) args: FindFirstCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).creator.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findFirstOrThrow')),
    });
  }
}
