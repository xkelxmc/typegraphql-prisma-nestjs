import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { NestedIntNullableFilter } from "../../../global/inputs/NestedIntNullableFilter";
import { NestedEnumPostKindNullableFilter } from "../inputs/NestedEnumPostKindNullableFilter";
import { PostKind } from "../../enums/PostKind";

@InputType("NestedEnumPostKindNullableWithAggregatesFilter", {})
export class NestedEnumPostKindNullableWithAggregatesFilter {
  @Field(_type => PostKind, {
    nullable: true
  })
  equals?: "BLOG" | "ADVERT" | undefined;

  @Field(_type => [PostKind], {
    nullable: true
  })
  in?: Array<"BLOG" | "ADVERT"> | undefined;

  @Field(_type => [PostKind], {
    nullable: true
  })
  notIn?: Array<"BLOG" | "ADVERT"> | undefined;

  @Field(_type => NestedEnumPostKindNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPostKindNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumPostKindNullableFilter | undefined;

  @Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumPostKindNullableFilter | undefined;
}
