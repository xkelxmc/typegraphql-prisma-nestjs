import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommentArgs } from "./args/UpdateOneCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class UpdateOneCommentResolver {
  @Mutation(_returns => Comment, {
    nullable: true
  })
  async updateOneComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneCommentArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'update');
    return getPrismaFromContext(ctx).comment.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'update')),
    });
  }
}
