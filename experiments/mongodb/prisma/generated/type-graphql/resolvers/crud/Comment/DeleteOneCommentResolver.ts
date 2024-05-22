import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCommentArgs } from "./args/DeleteOneCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class DeleteOneCommentResolver {
  @Mutation(_returns => Comment, {
    nullable: true
  })
  async deleteOneComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneCommentArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'delete');
    return getPrismaFromContext(ctx).comment.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'delete')),
    });
  }
}
