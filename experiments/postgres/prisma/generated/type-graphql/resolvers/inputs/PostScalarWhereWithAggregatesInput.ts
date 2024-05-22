import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { BoolWithAggregatesFilter } from "../../../global/inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../../../global/inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../../../global/inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../../../global/inputs/IntWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../../../global/inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../../../global/inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";
import { EnumPostKindNullableWithAggregatesFilter } from "../inputs/EnumPostKindNullableWithAggregatesFilter";

@InputType("PostScalarWhereWithAggregatesInput", {})
export class PostScalarWhereWithAggregatesInput {
  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PostScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  uuid?: StringWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  subtitle?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  content?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  editorId?: IntNullableWithAggregatesFilter | undefined;

  @Field(_type => EnumPostKindNullableWithAggregatesFilter, {
    nullable: true
  })
  kind?: EnumPostKindNullableWithAggregatesFilter | undefined;

  @Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  metadata?: JsonWithAggregatesFilter | undefined;
}
