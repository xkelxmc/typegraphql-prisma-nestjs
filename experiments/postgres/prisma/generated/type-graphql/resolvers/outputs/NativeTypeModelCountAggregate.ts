import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("NativeTypeModelCountAggregate", {})
export class NativeTypeModelCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  bigInt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  byteA!: number;

  @Field(_type => Int, {
    nullable: false
  })
  decimal!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
