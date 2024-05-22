import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("PatientFirstNameLastNameCompoundUniqueInput", {})
export class PatientFirstNameLastNameCompoundUniqueInput {
  @Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @Field(_type => String, {
    nullable: false
  })
  lastName!: string;
}
