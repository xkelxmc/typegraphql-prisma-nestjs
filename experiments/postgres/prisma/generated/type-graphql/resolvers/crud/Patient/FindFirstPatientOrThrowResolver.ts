import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPatientOrThrowArgs } from "./args/FindFirstPatientOrThrowArgs";
import { Patient } from "../../../models/Patient";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Patient)
export class FindFirstPatientOrThrowResolver {
  @Query(_returns => Patient, {
    nullable: true
  })
  async findFirstPatientOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPatientOrThrowArgs) args: FindFirstPatientOrThrowArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Patient', 'patient', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).patient.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Patient', 'patient', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Patient', 'patient', 'findFirstOrThrow')),
    });
  }
}
