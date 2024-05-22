import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePatientArgs } from "./args/DeleteOnePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class DeleteOnePatientResolver {
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
}
