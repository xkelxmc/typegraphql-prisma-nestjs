import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentArgs } from "./args/AggregateCommentArgs";
import { Comment } from "../../../models/Comment";
import { AggregateComment } from "../../outputs/AggregateComment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class AggregateCommentResolver {
  @Query(_returns => AggregateComment, {
    nullable: false
  })
  async aggregateComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateCommentArgs): Promise<AggregateComment> {
    return getPrismaFromContext(ctx).comment.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'aggregate'),
    });
  }
}
