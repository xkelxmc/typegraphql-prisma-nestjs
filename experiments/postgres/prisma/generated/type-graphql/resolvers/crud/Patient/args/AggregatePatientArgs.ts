import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PatientOrderByWithRelationAndSearchRelevanceInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";

@ArgsType()
export class AggregatePatientArgs {
  @Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @Field(_type => [PatientOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  cursor?: PatientWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
