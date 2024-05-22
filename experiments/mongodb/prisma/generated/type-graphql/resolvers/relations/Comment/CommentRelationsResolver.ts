import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class CommentRelationsResolver {
  @ResolveField(_type => Post, {
    nullable: false
  })
  async post(@Root() comment: Comment, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', '', '');
    return getPrismaFromContext(ctx).comment.findUniqueOrThrow({
      where: {
        id: comment.id,
      },
    }).post({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', '', '')),
    });
  }
}
