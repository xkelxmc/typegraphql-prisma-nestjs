import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePatientArgs } from "./args/UpsertOnePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class UpsertOnePatientResolver {
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
