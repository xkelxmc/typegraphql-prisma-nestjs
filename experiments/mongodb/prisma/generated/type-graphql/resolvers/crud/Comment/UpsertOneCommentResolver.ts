import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCommentArgs } from "./args/UpsertOneCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class UpsertOneCommentResolver {
  @Mutation(_returns => Comment, {
    nullable: false
  })
  async upsertOneComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneCommentArgs): Promise<Comment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'upsert');
    return getPrismaFromContext(ctx).comment.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'upsert')),
    });
  }
}
