import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPatientArgs } from "./args/GroupByPatientArgs";
import { Patient } from "../../../models/Patient";
import { PatientGroupBy } from "../../outputs/PatientGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class GroupByPatientResolver {
  @Query(_returns => [PatientGroupBy], {
    nullable: false
  })
  async groupByPatient(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByPatientArgs) args: GroupByPatientArgs): Promise<PatientGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'groupBy');
    return getPrismaFromContext(ctx).patient.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
