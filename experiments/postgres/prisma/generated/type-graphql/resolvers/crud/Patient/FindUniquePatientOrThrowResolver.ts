import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePatientOrThrowArgs } from "./args/FindUniquePatientOrThrowArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class FindUniquePatientOrThrowResolver {
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
}
