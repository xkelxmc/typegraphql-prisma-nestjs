import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientCreateManyInput } from "../../../inputs/PatientCreateManyInput";

@ArgsType()
export class CreateManyPatientArgs {
  @Field(_type => [PatientCreateManyInput], {
    nullable: false
  })
  data!: PatientCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
