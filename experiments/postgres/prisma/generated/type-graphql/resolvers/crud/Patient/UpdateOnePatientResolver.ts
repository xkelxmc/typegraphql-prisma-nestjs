import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePatientArgs } from "./args/UpdateOnePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class UpdateOnePatientResolver {
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
}
