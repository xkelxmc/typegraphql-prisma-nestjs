import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostOrThrowArgs } from "./args/FindUniquePostOrThrowArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class FindUniquePostOrThrowResolver {
  @Query(_returns => Post, {
    nullable: true
  })
  async getPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePostOrThrowArgs) args: FindUniquePostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findUniqueOrThrow')),
    });
  }
}
