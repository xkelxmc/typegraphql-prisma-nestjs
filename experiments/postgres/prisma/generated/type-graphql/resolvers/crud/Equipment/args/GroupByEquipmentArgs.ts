import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentOrderByWithAggregationInput } from "../../../inputs/EquipmentOrderByWithAggregationInput";
import { EquipmentScalarWhereWithAggregatesInput } from "../../../inputs/EquipmentScalarWhereWithAggregatesInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";
import { EquipmentScalarFieldEnum } from "../../../../enums/EquipmentScalarFieldEnum";

@ArgsType()
export class GroupByEquipmentArgs {
  @Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;

  @Field(_type => [EquipmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EquipmentOrderByWithAggregationInput[] | undefined;

  @Field(_type => [EquipmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @Field(_type => EquipmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EquipmentScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
