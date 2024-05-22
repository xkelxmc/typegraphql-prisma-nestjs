import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class FindUniqueCommentResolver {
  @Query(_returns => Comment, {
    nullable: true
  })
  async comment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueCommentArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findUnique');
    return getPrismaFromContext(ctx).comment.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findUnique')),
    });
  }
}
