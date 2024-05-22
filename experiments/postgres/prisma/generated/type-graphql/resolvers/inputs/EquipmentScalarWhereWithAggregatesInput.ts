import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringNullableWithAggregatesFilter } from "../../../global/inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("EquipmentScalarWhereWithAggregatesInput", {})
export class EquipmentScalarWhereWithAggregatesInput {
  @Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [EquipmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EquipmentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
