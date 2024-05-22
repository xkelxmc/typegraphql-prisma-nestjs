import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyPatientArgs } from "./args/CreateManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class CreateManyPatientResolver {
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
}
