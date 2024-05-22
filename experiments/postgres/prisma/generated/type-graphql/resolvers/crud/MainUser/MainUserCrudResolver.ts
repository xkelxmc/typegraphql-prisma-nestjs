import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMainUserArgs } from "./args/AggregateMainUserArgs";
import { CreateManyMainUserArgs } from "./args/CreateManyMainUserArgs";
import { CreateOneMainUserArgs } from "./args/CreateOneMainUserArgs";
import { DeleteManyMainUserArgs } from "./args/DeleteManyMainUserArgs";
import { DeleteOneMainUserArgs } from "./args/DeleteOneMainUserArgs";
import { FindFirstMainUserArgs } from "./args/FindFirstMainUserArgs";
import { FindFirstMainUserOrThrowArgs } from "./args/FindFirstMainUserOrThrowArgs";
import { FindManyMainUserArgs } from "./args/FindManyMainUserArgs";
import { FindUniqueMainUserArgs } from "./args/FindUniqueMainUserArgs";
import { FindUniqueMainUserOrThrowArgs } from "./args/FindUniqueMainUserOrThrowArgs";
import { GroupByMainUserArgs } from "./args/GroupByMainUserArgs";
import { UpdateManyMainUserArgs } from "./args/UpdateManyMainUserArgs";
import { UpdateOneMainUserArgs } from "./args/UpdateOneMainUserArgs";
import { UpsertOneMainUserArgs } from "./args/UpsertOneMainUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MainUser } from "../../../models/MainUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMainUser } from "../../outputs/AggregateMainUser";
import { MainUserGroupBy } from "../../outputs/MainUserGroupBy";

@Resolver(_of => MainUser)
export class MainUserCrudResolver {
  @Query(_returns => AggregateMainUser, {
    nullable: false
  })
  async aggregateMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateMainUserArgs) args: AggregateMainUserArgs): Promise<AggregateMainUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'User', 'user', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyMainUserArgs) args: CreateManyMainUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'createMany');
    return getPrismaFromContext(ctx).user.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'createMany')),
    });
  }

  @Mutation(_returns => MainUser, {
    nullable: false
  })
  async createOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneMainUserArgs) args: CreateOneMainUserArgs): Promise<MainUser> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'create');
    return getPrismaFromContext(ctx).user.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyMainUserArgs) args: DeleteManyMainUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'deleteMany');
    return getPrismaFromContext(ctx).user.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'deleteMany')),
    });
  }

  @Mutation(_returns => MainUser, {
    nullable: true
  })
  async deleteOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneMainUserArgs) args: DeleteOneMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'delete');
    return getPrismaFromContext(ctx).user.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'delete')),
    });
  }

  @Query(_returns => MainUser, {
    nullable: true
  })
  async findFirstMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMainUserArgs) args: FindFirstMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirst');
    return getPrismaFromContext(ctx).user.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirst')),
    });
  }

  @Query(_returns => MainUser, {
    nullable: true
  })
  async findFirstMainUserOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMainUserOrThrowArgs) args: FindFirstMainUserOrThrowArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).user.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [MainUser], {
    nullable: false
  })
  async mainUsers(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyMainUserArgs) args: FindManyMainUserArgs): Promise<MainUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findMany');
    return getPrismaFromContext(ctx).user.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findMany')),
    });
  }

  @Query(_returns => MainUser, {
    nullable: true
  })
  async mainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMainUserArgs) args: FindUniqueMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUnique');
    return getPrismaFromContext(ctx).user.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUnique')),
    });
  }

  @Query(_returns => MainUser, {
    nullable: true
  })
  async getMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMainUserOrThrowArgs) args: FindUniqueMainUserOrThrowArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [MainUserGroupBy], {
    nullable: false
  })
  async groupByMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByMainUserArgs) args: GroupByMainUserArgs): Promise<MainUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'groupBy');
    return getPrismaFromContext(ctx).user.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyMainUserArgs) args: UpdateManyMainUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'updateMany');
    return getPrismaFromContext(ctx).user.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'updateMany')),
    });
  }

  @Mutation(_returns => MainUser, {
    nullable: true
  })
  async updateOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneMainUserArgs) args: UpdateOneMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'update');
    return getPrismaFromContext(ctx).user.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'update')),
    });
  }

  @Mutation(_returns => MainUser, {
    nullable: false
  })
  async upsertOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneMainUserArgs) args: UpsertOneMainUserArgs): Promise<MainUser> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'upsert');
    return getPrismaFromContext(ctx).user.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'upsert')),
    });
  }
}
