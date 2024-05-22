import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { NestedBigIntNullableFilter } from "../inputs/NestedBigIntNullableFilter";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@InputType("NestedBigIntNullableWithAggregatesFilter", {})
export class NestedBigIntNullableWithAggregatesFilter {
  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  equals?: bigint | undefined;

  @Field(_type => [GraphQLScalars.BigIntResolver], {
    nullable: true
  })
  in?: bigint[] | undefined;

  @Field(_type => [GraphQLScalars.BigIntResolver], {
    nullable: true
  })
  notIn?: bigint[] | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  lt?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  lte?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  gt?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  gte?: bigint | undefined;

  @Field(_type => NestedBigIntNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBigIntNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _avg?: NestedFloatNullableFilter | undefined;

  @Field(_type => NestedBigIntNullableFilter, {
    nullable: true
  })
  _sum?: NestedBigIntNullableFilter | undefined;

  @Field(_type => NestedBigIntNullableFilter, {
    nullable: true
  })
  _min?: NestedBigIntNullableFilter | undefined;

  @Field(_type => NestedBigIntNullableFilter, {
    nullable: true
  })
  _max?: NestedBigIntNullableFilter | undefined;
}
