import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostOrThrowArgs } from "./args/FindFirstPostOrThrowArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class FindFirstPostOrThrowResolver {
  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPostOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPostOrThrowArgs) args: FindFirstPostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).post.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findFirstOrThrow')),
    });
  }
}
