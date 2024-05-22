import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";

@Resolver(_of => User)
export class UserCrudResolver {
  @Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'User', 'user', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'createMany');
    return getPrismaFromContext(ctx).user.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'createMany')),
    });
  }

  @Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'create');
    return getPrismaFromContext(ctx).user.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'deleteMany');
    return getPrismaFromContext(ctx).user.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'deleteMany')),
    });
  }

  @Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'delete');
    return getPrismaFromContext(ctx).user.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'delete')),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirst');
    return getPrismaFromContext(ctx).user.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirst')),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).user.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [User], {
    nullable: false
  })
  async users(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findMany');
    return getPrismaFromContext(ctx).user.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findMany')),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async user(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUnique');
    return getPrismaFromContext(ctx).user.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUnique')),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async getUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
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
  async updateManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'updateMany');
    return getPrismaFromContext(ctx).user.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'updateMany')),
    });
  }

  @Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'update');
    return getPrismaFromContext(ctx).user.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'update')),
    });
  }

  @Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'upsert');
    return getPrismaFromContext(ctx).user.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'upsert')),
    });
  }
}
