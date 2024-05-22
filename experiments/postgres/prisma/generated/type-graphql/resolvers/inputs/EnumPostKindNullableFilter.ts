import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { PostKind } from "../../enums/PostKind";
import { DecimalJSScalar } from "../../../global/scalars";
import { NestedEnumPostKindNullableFilter } from "../inputs/NestedEnumPostKindNullableFilter";

@InputType("EnumPostKindNullableFilter", {})
export class EnumPostKindNullableFilter {
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

  @Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true
  })
  not?: NestedEnumPostKindNullableFilter | undefined;
}
