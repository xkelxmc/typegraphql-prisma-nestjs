import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCommentArgs } from "./args/GroupByCommentArgs";
import { Comment } from "../../../models/Comment";
import { CommentGroupBy } from "../../outputs/CommentGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class GroupByCommentResolver {
  @Query(_returns => [CommentGroupBy], {
    nullable: false
  })
  async groupByComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByCommentArgs): Promise<CommentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'groupBy');
    return getPrismaFromContext(ctx).comment.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
