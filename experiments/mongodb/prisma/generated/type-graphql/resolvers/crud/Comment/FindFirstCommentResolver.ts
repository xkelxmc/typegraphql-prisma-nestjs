import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class FindFirstCommentResolver {
  @Query(_returns => Comment, {
    nullable: true
  })
  async findFirstComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstCommentArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findFirst');
    return getPrismaFromContext(ctx).comment.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findFirst')),
    });
  }
}
