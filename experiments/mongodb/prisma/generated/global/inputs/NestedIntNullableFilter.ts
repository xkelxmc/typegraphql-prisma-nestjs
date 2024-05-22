import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

@InputType("NestedIntNullableFilter", {})
export class NestedIntNullableFilter {
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

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  not?: NestedIntNullableFilter | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
