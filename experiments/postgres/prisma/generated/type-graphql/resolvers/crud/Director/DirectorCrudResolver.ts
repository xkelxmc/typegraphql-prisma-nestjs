import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { CreateManyDirectorArgs } from "./args/CreateManyDirectorArgs";
import { CreateOneDirectorArgs } from "./args/CreateOneDirectorArgs";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { DeleteOneDirectorArgs } from "./args/DeleteOneDirectorArgs";
import { FindFirstDirectorArgs } from "./args/FindFirstDirectorArgs";
import { FindFirstDirectorOrThrowArgs } from "./args/FindFirstDirectorOrThrowArgs";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { FindUniqueDirectorArgs } from "./args/FindUniqueDirectorArgs";
import { FindUniqueDirectorOrThrowArgs } from "./args/FindUniqueDirectorOrThrowArgs";
import { GroupByDirectorArgs } from "./args/GroupByDirectorArgs";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { UpdateOneDirectorArgs } from "./args/UpdateOneDirectorArgs";
import { UpsertOneDirectorArgs } from "./args/UpsertOneDirectorArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDirector } from "../../outputs/AggregateDirector";
import { DirectorGroupBy } from "../../outputs/DirectorGroupBy";

@Resolver(_of => Director)
export class DirectorCrudResolver {
  @Query(_returns => AggregateDirector, {
    nullable: false
  })
  async aggregateDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateDirectorArgs) args: AggregateDirectorArgs): Promise<AggregateDirector> {
    return getPrismaFromContext(ctx).director.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Director', 'director', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyDirectorArgs) args: CreateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'createMany');
    return getPrismaFromContext(ctx).director.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'createMany')),
    });
  }

  @Mutation(_returns => Director, {
    nullable: false
  })
  async createOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneDirectorArgs) args: CreateOneDirectorArgs): Promise<Director> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'create');
    return getPrismaFromContext(ctx).director.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyDirectorArgs) args: DeleteManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'deleteMany');
    return getPrismaFromContext(ctx).director.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'deleteMany')),
    });
  }

  @Mutation(_returns => Director, {
    nullable: true
  })
  async deleteOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneDirectorArgs) args: DeleteOneDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'delete');
    return getPrismaFromContext(ctx).director.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'delete')),
    });
  }

  @Query(_returns => Director, {
    nullable: true
  })
  async findFirstDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstDirectorArgs) args: FindFirstDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findFirst');
    return getPrismaFromContext(ctx).director.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findFirst')),
    });
  }

  @Query(_returns => Director, {
    nullable: true
  })
  async findFirstDirectorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstDirectorOrThrowArgs) args: FindFirstDirectorOrThrowArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).director.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Director], {
    nullable: false
  })
  async directors(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyDirectorArgs) args: FindManyDirectorArgs): Promise<Director[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findMany');
    return getPrismaFromContext(ctx).director.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findMany')),
    });
  }

  @Query(_returns => Director, {
    nullable: true
  })
  async director(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueDirectorArgs) args: FindUniqueDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findUnique');
    return getPrismaFromContext(ctx).director.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findUnique')),
    });
  }

  @Query(_returns => Director, {
    nullable: true
  })
  async getDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueDirectorOrThrowArgs) args: FindUniqueDirectorOrThrowArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).director.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [DirectorGroupBy], {
    nullable: false
  })
  async groupByDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByDirectorArgs) args: GroupByDirectorArgs): Promise<DirectorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'groupBy');
    return getPrismaFromContext(ctx).director.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyDirectorArgs) args: UpdateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'updateMany');
    return getPrismaFromContext(ctx).director.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'updateMany')),
    });
  }

  @Mutation(_returns => Director, {
    nullable: true
  })
  async updateOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneDirectorArgs) args: UpdateOneDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'update');
    return getPrismaFromContext(ctx).director.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'update')),
    });
  }

  @Mutation(_returns => Director, {
    nullable: false
  })
  async upsertOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneDirectorArgs) args: UpsertOneDirectorArgs): Promise<Director> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'upsert');
    return getPrismaFromContext(ctx).director.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'upsert')),
    });
  }
}
