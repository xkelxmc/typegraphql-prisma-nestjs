import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class FindManyCommentResolver {
  @Query(_returns => [Comment], {
    nullable: false
  })
  async comments(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyCommentArgs): Promise<Comment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findMany');
    return getPrismaFromContext(ctx).comment.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findMany')),
    });
  }
}
