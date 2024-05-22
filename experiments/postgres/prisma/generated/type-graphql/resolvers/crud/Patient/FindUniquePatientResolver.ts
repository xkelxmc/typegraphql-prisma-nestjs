import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePatientArgs } from "./args/FindUniquePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class FindUniquePatientResolver {
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
}
