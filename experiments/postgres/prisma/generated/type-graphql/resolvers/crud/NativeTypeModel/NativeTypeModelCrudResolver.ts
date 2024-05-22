import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNativeTypeModelArgs } from "./args/AggregateNativeTypeModelArgs";
import { CreateManyNativeTypeModelArgs } from "./args/CreateManyNativeTypeModelArgs";
import { CreateOneNativeTypeModelArgs } from "./args/CreateOneNativeTypeModelArgs";
import { DeleteManyNativeTypeModelArgs } from "./args/DeleteManyNativeTypeModelArgs";
import { DeleteOneNativeTypeModelArgs } from "./args/DeleteOneNativeTypeModelArgs";
import { FindFirstNativeTypeModelArgs } from "./args/FindFirstNativeTypeModelArgs";
import { FindFirstNativeTypeModelOrThrowArgs } from "./args/FindFirstNativeTypeModelOrThrowArgs";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs";
import { FindUniqueNativeTypeModelOrThrowArgs } from "./args/FindUniqueNativeTypeModelOrThrowArgs";
import { GroupByNativeTypeModelArgs } from "./args/GroupByNativeTypeModelArgs";
import { UpdateManyNativeTypeModelArgs } from "./args/UpdateManyNativeTypeModelArgs";
import { UpdateOneNativeTypeModelArgs } from "./args/UpdateOneNativeTypeModelArgs";
import { UpsertOneNativeTypeModelArgs } from "./args/UpsertOneNativeTypeModelArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNativeTypeModel } from "../../outputs/AggregateNativeTypeModel";
import { NativeTypeModelGroupBy } from "../../outputs/NativeTypeModelGroupBy";

@Resolver(_of => NativeTypeModel)
export class NativeTypeModelCrudResolver {
  @Query(_returns => AggregateNativeTypeModel, {
    nullable: false
  })
  async aggregateNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateNativeTypeModelArgs) args: AggregateNativeTypeModelArgs): Promise<AggregateNativeTypeModel> {
    return getPrismaFromContext(ctx).nativeTypeModel.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyNativeTypeModelArgs) args: CreateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'createMany');
    return getPrismaFromContext(ctx).nativeTypeModel.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'createMany')),
    });
  }

  @Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async createOneNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneNativeTypeModelArgs) args: CreateOneNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'create');
    return getPrismaFromContext(ctx).nativeTypeModel.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyNativeTypeModelArgs) args: DeleteManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany');
    return getPrismaFromContext(ctx).nativeTypeModel.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany')),
    });
  }

  @Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteOneNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneNativeTypeModelArgs) args: DeleteOneNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'delete');
    return getPrismaFromContext(ctx).nativeTypeModel.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'delete')),
    });
  }

  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async findFirstNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstNativeTypeModelArgs) args: FindFirstNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findFirst');
    return getPrismaFromContext(ctx).nativeTypeModel.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findFirst')),
    });
  }

  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async findFirstNativeTypeModelOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstNativeTypeModelOrThrowArgs) args: FindFirstNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).nativeTypeModel.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyNativeTypeModelArgs) args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findMany');
    return getPrismaFromContext(ctx).nativeTypeModel.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findMany')),
    });
  }

  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueNativeTypeModelArgs) args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findUnique');
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findUnique')),
    });
  }

  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async getNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueNativeTypeModelOrThrowArgs) args: FindUniqueNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).nativeTypeModel.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [NativeTypeModelGroupBy], {
    nullable: false
  })
  async groupByNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByNativeTypeModelArgs) args: GroupByNativeTypeModelArgs): Promise<NativeTypeModelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'groupBy');
    return getPrismaFromContext(ctx).nativeTypeModel.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyNativeTypeModelArgs) args: UpdateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'updateMany');
    return getPrismaFromContext(ctx).nativeTypeModel.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'updateMany')),
    });
  }

  @Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async updateOneNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneNativeTypeModelArgs) args: UpdateOneNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'update');
    return getPrismaFromContext(ctx).nativeTypeModel.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'update')),
    });
  }

  @Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertOneNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneNativeTypeModelArgs) args: UpsertOneNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'upsert');
    return getPrismaFromContext(ctx).nativeTypeModel.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'upsert')),
    });
  }
}
