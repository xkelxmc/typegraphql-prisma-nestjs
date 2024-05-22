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
  async aggregatePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregatePostArgs) args: AggregatePostArgs): Promise<AggregatePost> {
    return getPrismaFromContext(ctx).post.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'post', 'post', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyPostArgs) args: CreateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'createMany');
    return getPrismaFromContext(ctx).post.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'createMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: false
  })
  async createOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOnePostArgs) args: CreateOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'create');
    return getPrismaFromContext(ctx).post.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyPostArgs) args: DeleteManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'deleteMany');
    return getPrismaFromContext(ctx).post.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'deleteMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: true
  })
  async deleteOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOnePostArgs) args: DeleteOnePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'delete');
    return getPrismaFromContext(ctx).post.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'delete')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPostArgs) args: FindFirstPostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findFirst');
    return getPrismaFromContext(ctx).post.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findFirst')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPostOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPostOrThrowArgs) args: FindFirstPostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).post.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Post], {
    nullable: false
  })
  async posts(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyPostArgs) args: FindManyPostArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findMany');
    return getPrismaFromContext(ctx).post.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findMany')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async post(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePostArgs) args: FindUniquePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findUnique');
    return getPrismaFromContext(ctx).post.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findUnique')),
    });
  }

  @Query(_returns => Post, {
    nullable: true
  })
  async getPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePostOrThrowArgs) args: FindUniquePostOrThrowArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [PostGroupBy], {
    nullable: false
  })
  async groupByPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByPostArgs) args: GroupByPostArgs): Promise<PostGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'groupBy');
    return getPrismaFromContext(ctx).post.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyPostArgs) args: UpdateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'updateMany');
    return getPrismaFromContext(ctx).post.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'updateMany')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: true
  })
  async updateOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOnePostArgs) args: UpdateOnePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'update');
    return getPrismaFromContext(ctx).post.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'update')),
    });
  }

  @Mutation(_returns => Post, {
    nullable: false
  })
  async upsertOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOnePostArgs) args: UpsertOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'upsert');
    return getPrismaFromContext(ctx).post.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'upsert')),
    });
  }
}
