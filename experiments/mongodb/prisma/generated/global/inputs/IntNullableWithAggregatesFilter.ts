import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedIntNullableWithAggregatesFilter } from "../inputs/NestedIntNullableWithAggregatesFilter";

@InputType("IntNullableWithAggregatesFilter", {})
export class IntNullableWithAggregatesFilter {
  @Field(_type => Int, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(_type => NestedIntNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedIntNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _avg?: NestedFloatNullableFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _sum?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _min?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _max?: NestedIntNullableFilter | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
