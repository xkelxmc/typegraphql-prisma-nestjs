import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCommentArgs } from "./args/CreateOneCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class CreateOneCommentResolver {
  @Mutation(_returns => Comment, {
    nullable: false
  })
  async createOneComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneCommentArgs): Promise<Comment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'create');
    return getPrismaFromContext(ctx).comment.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'create')),
    });
  }
}
