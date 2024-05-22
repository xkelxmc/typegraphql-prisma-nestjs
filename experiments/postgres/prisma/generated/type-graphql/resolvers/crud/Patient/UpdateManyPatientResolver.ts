import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyPatientArgs } from "./args/UpdateManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class UpdateManyPatientResolver {
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
}
