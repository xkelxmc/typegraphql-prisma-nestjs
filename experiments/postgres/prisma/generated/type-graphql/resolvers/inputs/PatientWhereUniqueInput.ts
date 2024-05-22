import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { PatientFirstNameLastNameCompoundUniqueInput } from "../inputs/PatientFirstNameLastNameCompoundUniqueInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@InputType("PatientWhereUniqueInput", {})
export class PatientWhereUniqueInput {
  @Field(_type => PatientFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true
  })
  AND?: PatientWhereInput[] | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true
  })
  OR?: PatientWhereInput[] | undefined;

  @Field(_type => [PatientWhereInput], {
    nullable: true
  })
  NOT?: PatientWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;
}
