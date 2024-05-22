import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { CreateOneCategoryArgs } from "./args/CreateOneCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { DeleteOneCategoryArgs } from "./args/DeleteOneCategoryArgs";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { FindFirstCategoryOrThrowArgs } from "./args/FindFirstCategoryOrThrowArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { FindUniqueCategoryOrThrowArgs } from "./args/FindUniqueCategoryOrThrowArgs";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpdateOneCategoryArgs } from "./args/UpdateOneCategoryArgs";
import { UpsertOneCategoryArgs } from "./args/UpsertOneCategoryArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";

@Resolver(_of => Category)
export class CategoryCrudResolver {
  @Query(_returns => AggregateCategory, {
    nullable: false
  })
  async aggregateCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateCategoryArgs) args: AggregateCategoryArgs): Promise<AggregateCategory> {
    return getPrismaFromContext(ctx).category.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Category', 'category', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyCategoryArgs) args: CreateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'createMany');
    return getPrismaFromContext(ctx).category.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'createMany')),
    });
  }

  @Mutation(_returns => Category, {
    nullable: false
  })
  async createOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneCategoryArgs) args: CreateOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'create');
    return getPrismaFromContext(ctx).category.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyCategoryArgs) args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'deleteMany');
    return getPrismaFromContext(ctx).category.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'deleteMany')),
    });
  }

  @Mutation(_returns => Category, {
    nullable: true
  })
  async deleteOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneCategoryArgs) args: DeleteOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'delete');
    return getPrismaFromContext(ctx).category.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'delete')),
    });
  }

  @Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCategoryArgs) args: FindFirstCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findFirst');
    return getPrismaFromContext(ctx).category.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findFirst')),
    });
  }

  @Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategoryOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCategoryOrThrowArgs) args: FindFirstCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).category.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Category], {
    nullable: false
  })
  async categories(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyCategoryArgs) args: FindManyCategoryArgs): Promise<Category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findMany');
    return getPrismaFromContext(ctx).category.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findMany')),
    });
  }

  @Query(_returns => Category, {
    nullable: true
  })
  async category(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCategoryArgs) args: FindUniqueCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findUnique');
    return getPrismaFromContext(ctx).category.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findUnique')),
    });
  }

  @Query(_returns => Category, {
    nullable: true
  })
  async getCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCategoryOrThrowArgs) args: FindUniqueCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).category.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [CategoryGroupBy], {
    nullable: false
  })
  async groupByCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByCategoryArgs) args: GroupByCategoryArgs): Promise<CategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'groupBy');
    return getPrismaFromContext(ctx).category.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyCategoryArgs) args: UpdateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'updateMany');
    return getPrismaFromContext(ctx).category.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'updateMany')),
    });
  }

  @Mutation(_returns => Category, {
    nullable: true
  })
  async updateOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneCategoryArgs) args: UpdateOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'update');
    return getPrismaFromContext(ctx).category.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'update')),
    });
  }

  @Mutation(_returns => Category, {
    nullable: false
  })
  async upsertOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneCategoryArgs) args: UpsertOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'upsert');
    return getPrismaFromContext(ctx).category.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'upsert')),
    });
  }
}
