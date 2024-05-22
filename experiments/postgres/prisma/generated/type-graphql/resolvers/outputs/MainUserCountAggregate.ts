import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("MainUserCountAggregate", {})
export class MainUserCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  email!: number;

  @Field(_type => Int, {
    nullable: false
  })
  name!: number;

  @Field(_type => Int, {
    nullable: false
  })
  age!: number;

  @Field(_type => Int, {
    nullable: false
  })
  balance!: number;

  @Field(_type => Int, {
    nullable: false
  })
  amount!: number;

  @Field(_type => Int, {
    nullable: false
  })
  role!: number;

  @Field(_type => Int, {
    nullable: false
  })
  grades!: number;

  @Field(_type => Int, {
    nullable: false
  })
  aliases!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
