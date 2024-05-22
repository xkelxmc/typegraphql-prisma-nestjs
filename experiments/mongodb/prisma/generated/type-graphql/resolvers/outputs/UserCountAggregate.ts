import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("UserCountAggregate", {})
export class UserCountAggregate {
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
  age!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
