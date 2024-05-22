import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCreatorArgs } from "./args/AggregateCreatorArgs";
import { CreateManyCreatorArgs } from "./args/CreateManyCreatorArgs";
import { CreateOneCreatorArgs } from "./args/CreateOneCreatorArgs";
import { DeleteManyCreatorArgs } from "./args/DeleteManyCreatorArgs";
import { DeleteOneCreatorArgs } from "./args/DeleteOneCreatorArgs";
import { FindFirstCreatorArgs } from "./args/FindFirstCreatorArgs";
import { FindFirstCreatorOrThrowArgs } from "./args/FindFirstCreatorOrThrowArgs";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { FindUniqueCreatorArgs } from "./args/FindUniqueCreatorArgs";
import { FindUniqueCreatorOrThrowArgs } from "./args/FindUniqueCreatorOrThrowArgs";
import { GroupByCreatorArgs } from "./args/GroupByCreatorArgs";
import { UpdateManyCreatorArgs } from "./args/UpdateManyCreatorArgs";
import { UpdateOneCreatorArgs } from "./args/UpdateOneCreatorArgs";
import { UpsertOneCreatorArgs } from "./args/UpsertOneCreatorArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCreator } from "../../outputs/AggregateCreator";
import { CreatorGroupBy } from "../../outputs/CreatorGroupBy";

@Resolver(_of => Creator)
export class CreatorCrudResolver {
  @Query(_returns => AggregateCreator, {
    nullable: false
  })
  async aggregateCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateCreatorArgs) args: AggregateCreatorArgs): Promise<AggregateCreator> {
    return getPrismaFromContext(ctx).creator.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyCreatorArgs) args: CreateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'createMany');
    return getPrismaFromContext(ctx).creator.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'createMany')),
    });
  }

  @Mutation(_returns => Creator, {
    nullable: false
  })
  async createOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneCreatorArgs) args: CreateOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'create');
    return getPrismaFromContext(ctx).creator.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyCreatorArgs) args: DeleteManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'deleteMany');
    return getPrismaFromContext(ctx).creator.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'deleteMany')),
    });
  }

  @Mutation(_returns => Creator, {
    nullable: true
  })
  async deleteOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneCreatorArgs) args: DeleteOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'delete');
    return getPrismaFromContext(ctx).creator.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'delete')),
    });
  }

  @Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCreatorArgs) args: FindFirstCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findFirst');
    return getPrismaFromContext(ctx).creator.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findFirst')),
    });
  }

  @Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreatorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCreatorOrThrowArgs) args: FindFirstCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).creator.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyCreatorArgs) args: FindManyCreatorArgs): Promise<Creator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findMany');
    return getPrismaFromContext(ctx).creator.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findMany')),
    });
  }

  @Query(_returns => Creator, {
    nullable: true
  })
  async creator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCreatorArgs) args: FindUniqueCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findUnique');
    return getPrismaFromContext(ctx).creator.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findUnique')),
    });
  }

  @Query(_returns => Creator, {
    nullable: true
  })
  async getCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCreatorOrThrowArgs) args: FindUniqueCreatorOrThrowArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).creator.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [CreatorGroupBy], {
    nullable: false
  })
  async groupByCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByCreatorArgs) args: GroupByCreatorArgs): Promise<CreatorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'groupBy');
    return getPrismaFromContext(ctx).creator.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyCreatorArgs) args: UpdateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'updateMany');
    return getPrismaFromContext(ctx).creator.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'updateMany')),
    });
  }

  @Mutation(_returns => Creator, {
    nullable: true
  })
  async updateOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneCreatorArgs) args: UpdateOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'update');
    return getPrismaFromContext(ctx).creator.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'update')),
    });
  }

  @Mutation(_returns => Creator, {
    nullable: false
  })
  async upsertOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneCreatorArgs) args: UpsertOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'upsert');
    return getPrismaFromContext(ctx).creator.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'upsert')),
    });
  }
}
