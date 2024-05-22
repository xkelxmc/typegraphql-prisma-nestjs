import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProblemArgs } from "./args/AggregateProblemArgs";
import { CreateManyProblemArgs } from "./args/CreateManyProblemArgs";
import { CreateOneProblemArgs } from "./args/CreateOneProblemArgs";
import { DeleteManyProblemArgs } from "./args/DeleteManyProblemArgs";
import { DeleteOneProblemArgs } from "./args/DeleteOneProblemArgs";
import { FindFirstProblemArgs } from "./args/FindFirstProblemArgs";
import { FindFirstProblemOrThrowArgs } from "./args/FindFirstProblemOrThrowArgs";
import { FindManyProblemArgs } from "./args/FindManyProblemArgs";
import { FindUniqueProblemArgs } from "./args/FindUniqueProblemArgs";
import { FindUniqueProblemOrThrowArgs } from "./args/FindUniqueProblemOrThrowArgs";
import { GroupByProblemArgs } from "./args/GroupByProblemArgs";
import { UpdateManyProblemArgs } from "./args/UpdateManyProblemArgs";
import { UpdateOneProblemArgs } from "./args/UpdateOneProblemArgs";
import { UpsertOneProblemArgs } from "./args/UpsertOneProblemArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Problem } from "../../../models/Problem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProblem } from "../../outputs/AggregateProblem";
import { ProblemGroupBy } from "../../outputs/ProblemGroupBy";

@Resolver(_of => Problem)
export class ProblemCrudResolver {
  @Query(_returns => AggregateProblem, {
    nullable: false
  })
  async aggregateProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateProblemArgs) args: AggregateProblemArgs): Promise<AggregateProblem> {
    return getPrismaFromContext(ctx).problem.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyProblemArgs) args: CreateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'createMany');
    return getPrismaFromContext(ctx).problem.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'createMany')),
    });
  }

  @Mutation(_returns => Problem, {
    nullable: false
  })
  async createOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneProblemArgs) args: CreateOneProblemArgs): Promise<Problem> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'create');
    return getPrismaFromContext(ctx).problem.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyProblemArgs) args: DeleteManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'deleteMany');
    return getPrismaFromContext(ctx).problem.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'deleteMany')),
    });
  }

  @Mutation(_returns => Problem, {
    nullable: true
  })
  async deleteOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneProblemArgs) args: DeleteOneProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'delete');
    return getPrismaFromContext(ctx).problem.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'delete')),
    });
  }

  @Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstProblemArgs) args: FindFirstProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findFirst');
    return getPrismaFromContext(ctx).problem.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findFirst')),
    });
  }

  @Query(_returns => Problem, {
    nullable: true
  })
  async findFirstProblemOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstProblemOrThrowArgs) args: FindFirstProblemOrThrowArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).problem.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Problem], {
    nullable: false
  })
  async problems(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyProblemArgs) args: FindManyProblemArgs): Promise<Problem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findMany');
    return getPrismaFromContext(ctx).problem.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findMany')),
    });
  }

  @Query(_returns => Problem, {
    nullable: true
  })
  async problem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueProblemArgs) args: FindUniqueProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findUnique');
    return getPrismaFromContext(ctx).problem.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findUnique')),
    });
  }

  @Query(_returns => Problem, {
    nullable: true
  })
  async getProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueProblemOrThrowArgs) args: FindUniqueProblemOrThrowArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).problem.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [ProblemGroupBy], {
    nullable: false
  })
  async groupByProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByProblemArgs) args: GroupByProblemArgs): Promise<ProblemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'groupBy');
    return getPrismaFromContext(ctx).problem.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyProblemArgs) args: UpdateManyProblemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'updateMany');
    return getPrismaFromContext(ctx).problem.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'updateMany')),
    });
  }

  @Mutation(_returns => Problem, {
    nullable: true
  })
  async updateOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneProblemArgs) args: UpdateOneProblemArgs): Promise<Problem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'update');
    return getPrismaFromContext(ctx).problem.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'update')),
    });
  }

  @Mutation(_returns => Problem, {
    nullable: false
  })
  async upsertOneProblem(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneProblemArgs) args: UpsertOneProblemArgs): Promise<Problem> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Problem', 'problem', 'upsert');
    return getPrismaFromContext(ctx).problem.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Problem', 'problem', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Problem', 'problem', 'upsert')),
    });
  }
}
