import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostArgs } from "./args/AggregatePostArgs";
import { CreateManyPostArgs } from "./args/CreateManyPostArgs";
import { CreateOnePostArgs } from "./args/CreateOnePostArgs";
import { DeleteManyPostArgs } from "./args/DeleteManyPostArgs";
import { DeleteOnePostArgs } from "./args/DeleteOnePostArgs";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { FindFirstPostOrThrowArgs } from "./args/FindFirstPostOrThrowArgs";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { FindUniquePostOrThrowArgs } from "./args/FindUniquePostOrThrowArgs";
import { GroupByPostArgs } from "./args/GroupByPostArgs";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { UpdateOnePostArgs } from "./args/UpdateOnePostArgs";
import { UpsertOnePostArgs } from "./args/UpsertOnePostArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePost } from "../../outputs/AggregatePost";
import { PostGroupBy } from "../../outputs/PostGroupBy";

@Resolver(_of => Post)
export class PostCrudResolver {
  @Query(_returns => AggregatePost, {
    nullable: false
  })
  async aggregatePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregatePostArgs): Promise<AggregatePost> {
    return getPrismaFromContext(ctx).post.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Post', 'post', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'createMany');
    return getPrismaFromContext(ctx).post.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'createMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: false
  })
  async createOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'create');
    return getPrismaFromContext(ctx).post.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'deleteMany');
    return getPrismaFromContext(ctx).post.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'deleteMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: true
  })
  async deleteOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOnePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'delete');
    return getPrismaFromContext(ctx).post.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'delete')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstPostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findFirst');
    return getPrismaFromContext(ctx).post.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findFirst')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPostOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstPostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).post.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Post], {
    nullable: false
  })
  async posts(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyPostArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findMany');
    return getPrismaFromContext(ctx).post.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findMany')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async post(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniquePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findUnique');
    return getPrismaFromContext(ctx).post.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findUnique')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async getPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniquePostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [PostGroupBy], {
    nullable: false
  })
  async groupByPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByPostArgs): Promise<PostGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'groupBy');
    return getPrismaFromContext(ctx).post.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'updateMany');
    return getPrismaFromContext(ctx).post.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'updateMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: true
  })
  async updateOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOnePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'update');
    return getPrismaFromContext(ctx).post.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'update')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: false
  })
  async upsertOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'upsert');
    return getPrismaFromContext(ctx).post.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'upsert')),
    });
  }
}
