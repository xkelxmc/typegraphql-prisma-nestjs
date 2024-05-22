import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEquipmentArgs } from "./args/AggregateEquipmentArgs";
import { CreateManyEquipmentArgs } from "./args/CreateManyEquipmentArgs";
import { CreateOneEquipmentArgs } from "./args/CreateOneEquipmentArgs";
import { DeleteManyEquipmentArgs } from "./args/DeleteManyEquipmentArgs";
import { DeleteOneEquipmentArgs } from "./args/DeleteOneEquipmentArgs";
import { FindFirstEquipmentArgs } from "./args/FindFirstEquipmentArgs";
import { FindFirstEquipmentOrThrowArgs } from "./args/FindFirstEquipmentOrThrowArgs";
import { FindManyEquipmentArgs } from "./args/FindManyEquipmentArgs";
import { FindUniqueEquipmentArgs } from "./args/FindUniqueEquipmentArgs";
import { FindUniqueEquipmentOrThrowArgs } from "./args/FindUniqueEquipmentOrThrowArgs";
import { GroupByEquipmentArgs } from "./args/GroupByEquipmentArgs";
import { UpdateManyEquipmentArgs } from "./args/UpdateManyEquipmentArgs";
import { UpdateOneEquipmentArgs } from "./args/UpdateOneEquipmentArgs";
import { UpsertOneEquipmentArgs } from "./args/UpsertOneEquipmentArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Equipment } from "../../../models/Equipment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEquipment } from "../../outputs/AggregateEquipment";
import { EquipmentGroupBy } from "../../outputs/EquipmentGroupBy";

@Resolver(_of => Equipment)
export class EquipmentCrudResolver {
  @Query(_returns => AggregateEquipment, {
    nullable: false
  })
  async aggregateEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateEquipmentArgs) args: AggregateEquipmentArgs): Promise<AggregateEquipment> {
    return getPrismaFromContext(ctx).equipment.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyEquipmentArgs) args: CreateManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'createMany');
    return getPrismaFromContext(ctx).equipment.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'createMany')),
    });
  }

  @Mutation(_returns => Equipment, {
    nullable: false
  })
  async createOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneEquipmentArgs) args: CreateOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'create');
    return getPrismaFromContext(ctx).equipment.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyEquipmentArgs) args: DeleteManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'deleteMany');
    return getPrismaFromContext(ctx).equipment.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'deleteMany')),
    });
  }

  @Mutation(_returns => Equipment, {
    nullable: true
  })
  async deleteOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneEquipmentArgs) args: DeleteOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'delete');
    return getPrismaFromContext(ctx).equipment.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'delete')),
    });
  }

  @Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstEquipmentArgs) args: FindFirstEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findFirst');
    return getPrismaFromContext(ctx).equipment.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findFirst')),
    });
  }

  @Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipmentOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstEquipmentOrThrowArgs) args: FindFirstEquipmentOrThrowArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).equipment.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Equipment], {
    nullable: false
  })
  async equipments(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyEquipmentArgs) args: FindManyEquipmentArgs): Promise<Equipment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findMany');
    return getPrismaFromContext(ctx).equipment.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findMany')),
    });
  }

  @Query(_returns => Equipment, {
    nullable: true
  })
  async equipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueEquipmentArgs) args: FindUniqueEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findUnique');
    return getPrismaFromContext(ctx).equipment.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findUnique')),
    });
  }

  @Query(_returns => Equipment, {
    nullable: true
  })
  async getEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueEquipmentOrThrowArgs) args: FindUniqueEquipmentOrThrowArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).equipment.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [EquipmentGroupBy], {
    nullable: false
  })
  async groupByEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByEquipmentArgs) args: GroupByEquipmentArgs): Promise<EquipmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'groupBy');
    return getPrismaFromContext(ctx).equipment.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyEquipmentArgs) args: UpdateManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'updateMany');
    return getPrismaFromContext(ctx).equipment.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'updateMany')),
    });
  }

  @Mutation(_returns => Equipment, {
    nullable: true
  })
  async updateOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneEquipmentArgs) args: UpdateOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'update');
    return getPrismaFromContext(ctx).equipment.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'update')),
    });
  }

  @Mutation(_returns => Equipment, {
    nullable: false
  })
  async upsertOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneEquipmentArgs) args: UpsertOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'upsert');
    return getPrismaFromContext(ctx).equipment.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'upsert')),
    });
  }
}
