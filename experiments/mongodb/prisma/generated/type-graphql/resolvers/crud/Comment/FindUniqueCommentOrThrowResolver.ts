import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentOrThrowArgs } from "./args/FindUniqueCommentOrThrowArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class FindUniqueCommentOrThrowResolver {
  @Query(_returns => Comment, {
    nullable: true
  })
  async getComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueCommentOrThrowArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).comment.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findUniqueOrThrow')),
    });
  }
}
