import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePatientArgs } from "./args/AggregatePatientArgs";
import { CreateManyPatientArgs } from "./args/CreateManyPatientArgs";
import { CreateOnePatientArgs } from "./args/CreateOnePatientArgs";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { DeleteOnePatientArgs } from "./args/DeleteOnePatientArgs";
import { FindFirstPatientArgs } from "./args/FindFirstPatientArgs";
import { FindFirstPatientOrThrowArgs } from "./args/FindFirstPatientOrThrowArgs";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { FindUniquePatientArgs } from "./args/FindUniquePatientArgs";
import { FindUniquePatientOrThrowArgs } from "./args/FindUniquePatientOrThrowArgs";
import { GroupByPatientArgs } from "./args/GroupByPatientArgs";
import { UpdateManyPatientArgs } from "./args/UpdateManyPatientArgs";
import { UpdateOnePatientArgs } from "./args/UpdateOnePatientArgs";
import { UpsertOnePatientArgs } from "./args/UpsertOnePatientArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Patient } from "../../../models/Patient";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePatient } from "../../outputs/AggregatePatient";
import { PatientGroupBy } from "../../outputs/PatientGroupBy";

@Resolver(_of => Patient)
export class PatientCrudResolver {
  @Query(_returns => AggregatePatient, {
    nullable: false
  })
  async aggregatePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregatePatientArgs) args: AggregatePatientArgs): Promise<AggregatePatient> {
    return getPrismaFromContext(ctx).patient.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'aggregate'),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyPatientArgs) args: CreateManyPatientArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'createMany');
    return getPrismaFromContext(ctx).patient.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'createMany')),
    });
  }

  @Mutation(_returns => Patient, {
    nullable: false
  })
  async createOnePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOnePatientArgs) args: CreateOnePatientArgs): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'create');
    return getPrismaFromContext(ctx).patient.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'create')),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyPatientArgs) args: DeleteManyPatientArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'deleteMany');
    return getPrismaFromContext(ctx).patient.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'deleteMany')),
    });
  }

  @Mutation(_returns => Patient, {
    nullable: true
  })
  async deleteOnePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOnePatientArgs) args: DeleteOnePatientArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'delete');
    return getPrismaFromContext(ctx).patient.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'delete')),
    });
  }

  @Query(_returns => Patient, {
    nullable: true
  })
  async findFirstPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPatientArgs) args: FindFirstPatientArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findFirst');
    return getPrismaFromContext(ctx).patient.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findFirst')),
    });
  }

  @Query(_returns => Patient, {
    nullable: true
  })
  async findFirstPatientOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPatientOrThrowArgs) args: FindFirstPatientOrThrowArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).patient.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findFirstOrThrow')),
    });
  }

  @Query(_returns => [Patient], {
    nullable: false
  })
  async patients(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyPatientArgs) args: FindManyPatientArgs): Promise<Patient[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findMany');
    return getPrismaFromContext(ctx).patient.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findMany')),
    });
  }

  @Query(_returns => Patient, {
    nullable: true
  })
  async patient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePatientArgs) args: FindUniquePatientArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findUnique');
    return getPrismaFromContext(ctx).patient.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findUnique')),
    });
  }

  @Query(_returns => Patient, {
    nullable: true
  })
  async getPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePatientOrThrowArgs) args: FindUniquePatientOrThrowArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).patient.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findUniqueOrThrow')),
    });
  }

  @Query(_returns => [PatientGroupBy], {
    nullable: false
  })
  async groupByPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByPatientArgs) args: GroupByPatientArgs): Promise<PatientGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'groupBy');
    return getPrismaFromContext(ctx).patient.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyPatientArgs) args: UpdateManyPatientArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'updateMany');
    return getPrismaFromContext(ctx).patient.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'updateMany')),
    });
  }

  @Mutation(_returns => Patient, {
    nullable: true
  })
  async updateOnePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOnePatientArgs) args: UpdateOnePatientArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'update');
    return getPrismaFromContext(ctx).patient.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'update')),
    });
  }

  @Mutation(_returns => Patient, {
    nullable: false
  })
  async upsertOnePatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOnePatientArgs) args: UpsertOnePatientArgs): Promise<Patient> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'upsert');
    return getPrismaFromContext(ctx).patient.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'upsert')),
    });
  }
}
