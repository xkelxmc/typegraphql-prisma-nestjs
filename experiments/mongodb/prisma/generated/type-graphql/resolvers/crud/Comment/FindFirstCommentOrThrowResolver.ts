import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentOrThrowArgs } from "./args/FindFirstCommentOrThrowArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class FindFirstCommentOrThrowResolver {
  @Query(_returns => Comment, {
    nullable: true
  })
  async findFirstCommentOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstCommentOrThrowArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).comment.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findFirstOrThrow')),
    });
  }
}
