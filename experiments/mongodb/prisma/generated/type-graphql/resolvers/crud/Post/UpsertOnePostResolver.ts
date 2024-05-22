import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostArgs } from "./args/UpsertOnePostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class UpsertOnePostResolver {
  @Mutation(_returns => Post, {
    nullable: false
  })
  async upsertOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'upsert');
    return getPrismaFromContext(ctx).post.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'upsert')),
    });
  }
}
