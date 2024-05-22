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
  async upsertOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOnePostArgs) args: UpsertOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'upsert');
    return getPrismaFromContext(ctx).post.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'upsert')),
    });
  }
}
