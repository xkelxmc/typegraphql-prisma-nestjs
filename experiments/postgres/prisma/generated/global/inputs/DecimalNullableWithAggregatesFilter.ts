import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { NestedDecimalNullableFilter } from "../inputs/NestedDecimalNullableFilter";
import { NestedDecimalNullableWithAggregatesFilter } from "../inputs/NestedDecimalNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@InputType("DecimalNullableWithAggregatesFilter", {})
export class DecimalNullableWithAggregatesFilter {
  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  equals?: Prisma.Decimal | undefined;

  @Field(_type => [DecimalJSScalar], {
    nullable: true
  })
  in?: Prisma.Decimal[] | undefined;

  @Field(_type => [DecimalJSScalar], {
    nullable: true
  })
  notIn?: Prisma.Decimal[] | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  lt?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  lte?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  gt?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  gte?: Prisma.Decimal | undefined;

  @Field(_type => NestedDecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDecimalNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _avg?: NestedDecimalNullableFilter | undefined;

  @Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _sum?: NestedDecimalNullableFilter | undefined;

  @Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _min?: NestedDecimalNullableFilter | undefined;

  @Field(_type => NestedDecimalNullableFilter, {
    nullable: true
  })
  _max?: NestedDecimalNullableFilter | undefined;
}
