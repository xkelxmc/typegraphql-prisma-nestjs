import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHiddenArgs } from "./args/AggregateHiddenArgs";
import { CreateManyHiddenArgs } from "./args/CreateManyHiddenArgs";
import { CreateOneHiddenArgs } from "./args/CreateOneHiddenArgs";
import { DeleteManyHiddenArgs } from "./args/DeleteManyHiddenArgs";
import { DeleteOneHiddenArgs } from "./args/DeleteOneHiddenArgs";
import { FindFirstHiddenArgs } from "./args/FindFirstHiddenArgs";
import { FindFirstHiddenOrThrowArgs } from "./args/FindFirstHiddenOrThrowArgs";
import { FindManyHiddenArgs } from "./args/FindManyHiddenArgs";
import { FindUniqueHiddenArgs } from "./args/FindUniqueHiddenArgs";
import { FindUniqueHiddenOrThrowArgs } from "./args/FindUniqueHiddenOrThrowArgs";
import { GroupByHiddenArgs } from "./args/GroupByHiddenArgs";
import { UpdateManyHiddenArgs } from "./args/UpdateManyHiddenArgs";
import { UpdateOneHiddenArgs } from "./args/UpdateOneHiddenArgs";
import { UpsertOneHiddenArgs } from "./args/UpsertOneHiddenArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Hidden } from "../../../models/Hidden";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHidden } from "../../outputs/AggregateHidden";
import { HiddenGroupBy } from "../../outputs/HiddenGroupBy";

@Resolver(_of => Hidden)
export class HiddenCrudResolver {
  @Query(_returns => AggregateHidden, {
    nullable: false
  })
  async aggregateHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateHiddenArgs) args: AggregateHiddenArgs): Promise<AggregateHidden> {
    return getPrismaFromContext(ctx).hidden.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyHiddenArgs) args: CreateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'createMany');
    return getPrismaFromContext(ctx).hidden.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'createMany')),
    });
  }

  @Mutation(_returns => Hidden, {
    nullable: false
  })
  async createOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneHiddenArgs) args: CreateOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'create');
    return getPrismaFromContext(ctx).hidden.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyHiddenArgs) args: DeleteManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'deleteMany');
    return getPrismaFromContext(ctx).hidden.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'deleteMany')),
    });
  }

  @Mutation(_returns => Hidden, {
    nullable: true
  })
  async deleteOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneHiddenArgs) args: DeleteOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'delete');
    return getPrismaFromContext(ctx).hidden.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'delete')),
    });
  }

  @Query(_returns => Hidden, {
    nullable: true
  })
  async findFirstHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstHiddenArgs) args: FindFirstHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findFirst');
    return getPrismaFromContext(ctx).hidden.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findFirst')),
    });
  }

  @Query(_returns => Hidden, {
    nullable: true
  })
  async findFirstHiddenOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstHiddenOrThrowArgs) args: FindFirstHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).hidden.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Hidden], {
    nullable: false
  })
  async hiddens(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyHiddenArgs) args: FindManyHiddenArgs): Promise<Hidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findMany');
    return getPrismaFromContext(ctx).hidden.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findMany')),
    });
  }

  @Query(_returns => Hidden, {
    nullable: true
  })
  async hidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueHiddenArgs) args: FindUniqueHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findUnique');
    return getPrismaFromContext(ctx).hidden.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findUnique')),
    });
  }

  @Query(_returns => Hidden, {
    nullable: true
  })
  async getHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueHiddenOrThrowArgs) args: FindUniqueHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).hidden.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [HiddenGroupBy], {
    nullable: false
  })
  async groupByHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByHiddenArgs) args: GroupByHiddenArgs): Promise<HiddenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'groupBy');
    return getPrismaFromContext(ctx).hidden.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyHiddenArgs) args: UpdateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'updateMany');
    return getPrismaFromContext(ctx).hidden.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'updateMany')),
    });
  }

  @Mutation(_returns => Hidden, {
    nullable: true
  })
  async updateOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneHiddenArgs) args: UpdateOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'update');
    return getPrismaFromContext(ctx).hidden.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'update')),
    });
  }

  @Mutation(_returns => Hidden, {
    nullable: false
  })
  async upsertOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneHiddenArgs) args: UpsertOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'upsert');
    return getPrismaFromContext(ctx).hidden.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'upsert')),
    });
  }
}
