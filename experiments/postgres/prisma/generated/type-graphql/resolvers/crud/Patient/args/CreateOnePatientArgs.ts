import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientCreateInput } from "../../../inputs/PatientCreateInput";

@ArgsType()
export class CreateOnePatientArgs {
  @Field(_type => PatientCreateInput, {
    nullable: false
  })
  data!: PatientCreateInput;
}
