import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyPatientArgs } from "./args/DeleteManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class DeleteManyPatientResolver {
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
}
