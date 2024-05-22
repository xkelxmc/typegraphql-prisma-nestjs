import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

@InputType("NestedFloatNullableFilter", {})
export class NestedFloatNullableFilter {
  @Field(_type => Float, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  not?: NestedFloatNullableFilter | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
