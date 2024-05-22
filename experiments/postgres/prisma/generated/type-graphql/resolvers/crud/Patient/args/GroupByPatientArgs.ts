import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByWithAggregationInput } from "../../../inputs/PatientOrderByWithAggregationInput";
import { PatientScalarWhereWithAggregatesInput } from "../../../inputs/PatientScalarWhereWithAggregatesInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientScalarFieldEnum } from "../../../../enums/PatientScalarFieldEnum";

@ArgsType()
export class GroupByPatientArgs {
  @Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @Field(_type => [PatientOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PatientOrderByWithAggregationInput[] | undefined;

  @Field(_type => [PatientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"firstName" | "lastName" | "email">;

  @Field(_type => PatientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PatientScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
