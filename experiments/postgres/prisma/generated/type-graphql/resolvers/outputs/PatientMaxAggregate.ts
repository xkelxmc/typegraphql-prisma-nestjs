import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("PatientMaxAggregate", {})
export class PatientMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  email!: string | null;
}
