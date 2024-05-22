import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePatientArgs } from "./args/CreateOnePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class CreateOnePatientResolver {
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
}
