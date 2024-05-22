import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { Role } from "../../enums/Role";

@ObjectType("MainUserMaxAggregate", {})
export class MainUserMaxAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  age!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  balance!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  amount!: number | null;

  @Field(_type => Role, {
    nullable: true
  })
  role!: "USER" | "ADMIN" | null;
}
