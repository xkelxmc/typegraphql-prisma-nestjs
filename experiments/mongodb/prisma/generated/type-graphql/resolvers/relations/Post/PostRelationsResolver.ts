import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class PostRelationsResolver {
  @ResolveField(_type => [Comment], {
    nullable: false
  })
  async comments(@Root() post: Post, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: PostCommentsArgs): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', '', '');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      where: {
        id: post.id,
      },
    }).comments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', '', '')),
    });
  }

  @ResolveField(_type => User, {
    nullable: false
  })
  async author(@Root() post: Post, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', '', '');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      where: {
        id: post.id,
      },
    }).author({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', '', '')),
    });
  }
}
