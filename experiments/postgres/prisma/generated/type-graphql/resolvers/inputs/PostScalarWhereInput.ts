import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { BoolFilter } from "../../../global/inputs/BoolFilter";
import { DateTimeFilter } from "../../../global/inputs/DateTimeFilter";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { IntNullableFilter } from "../../../global/inputs/IntNullableFilter";
import { JsonFilter } from "../../../global/inputs/JsonFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { StringNullableFilter } from "../../../global/inputs/StringNullableFilter";
import { EnumPostKindNullableFilter } from "../inputs/EnumPostKindNullableFilter";

@InputType("PostScalarWhereInput", {})
export class PostScalarWhereInput {
  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  AND?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  OR?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  NOT?: PostScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  uuid?: StringFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  subtitle?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  content?: StringNullableFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  editorId?: IntNullableFilter | undefined;

  @Field(_type => EnumPostKindNullableFilter, {
    nullable: true
  })
  kind?: EnumPostKindNullableFilter | undefined;

  @Field(_type => JsonFilter, {
    nullable: true
  })
  metadata?: JsonFilter | undefined;
}
