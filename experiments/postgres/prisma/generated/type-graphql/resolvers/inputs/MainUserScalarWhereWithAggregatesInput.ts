import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { FloatWithAggregatesFilter } from "../../../global/inputs/FloatWithAggregatesFilter";
import { IntNullableListFilter } from "../../../global/inputs/IntNullableListFilter";
import { IntWithAggregatesFilter } from "../../../global/inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../../../global/inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../../../global/inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";

@InputType("MainUserScalarWhereWithAggregatesInput", {})
export class MainUserScalarWhereWithAggregatesInput {
  @Field(_type => [MainUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MainUserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MainUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MainUserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MainUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MainUserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  name?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  age?: IntWithAggregatesFilter | undefined;

  balance?: FloatWithAggregatesFilter | undefined;

  @Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  amount?: FloatWithAggregatesFilter | undefined;

  @Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumRoleWithAggregatesFilter | undefined;

  @Field(_type => IntNullableListFilter, {
    nullable: true
  })
  grades?: IntNullableListFilter | undefined;

  @Field(_type => StringNullableListFilter, {
    nullable: true
  })
  aliases?: StringNullableListFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableWithAggregatesFilter | undefined) {
    this.name = name;
  }

  @Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatWithAggregatesFilter | undefined) {
    this.balance = balance;
  }
}
