import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentArgs } from "./args/AggregateCommentArgs";
import { CreateManyCommentArgs } from "./args/CreateManyCommentArgs";
import { CreateOneCommentArgs } from "./args/CreateOneCommentArgs";
import { DeleteManyCommentArgs } from "./args/DeleteManyCommentArgs";
import { DeleteOneCommentArgs } from "./args/DeleteOneCommentArgs";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";
import { FindFirstCommentOrThrowArgs } from "./args/FindFirstCommentOrThrowArgs";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";
import { FindUniqueCommentOrThrowArgs } from "./args/FindUniqueCommentOrThrowArgs";
import { GroupByCommentArgs } from "./args/GroupByCommentArgs";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";
import { UpdateOneCommentArgs } from "./args/UpdateOneCommentArgs";
import { UpsertOneCommentArgs } from "./args/UpsertOneCommentArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateComment } from "../../outputs/AggregateComment";
import { CommentGroupBy } from "../../outputs/CommentGroupBy";

@Resolver(_of => Comment)
export class CommentCrudResolver {
  @Query(_returns => AggregateComment, {
    nullable: false
  })
  async aggregateComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateCommentArgs): Promise<AggregateComment> {
    return getPrismaFromContext(ctx).comment.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'createMany');
    return getPrismaFromContext(ctx).comment.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'createMany')),
    });
  }

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

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'deleteMany');
    return getPrismaFromContext(ctx).comment.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'deleteMany')),
    });
  }

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

  @Query(_returns => Comment, {
    nullable: true
  })
  async getComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueCommentOrThrowArgs): Promise<Comment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).comment.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'findUniqueOrThrow')),
    });
  }

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

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'updateMany');
    return getPrismaFromContext(ctx).comment.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'updateMany')),
    });
  }

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
