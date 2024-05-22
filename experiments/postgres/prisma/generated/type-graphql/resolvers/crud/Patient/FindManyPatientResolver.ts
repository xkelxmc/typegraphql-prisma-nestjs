import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPatientArgs } from "./args/FindManyPatientArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class FindManyPatientResolver {
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
}
