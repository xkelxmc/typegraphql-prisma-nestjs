import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { EquipmentCountOrderByAggregateInput } from "../inputs/EquipmentCountOrderByAggregateInput";
import { EquipmentMaxOrderByAggregateInput } from "../inputs/EquipmentMaxOrderByAggregateInput";
import { EquipmentMinOrderByAggregateInput } from "../inputs/EquipmentMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("EquipmentOrderByWithAggregationInput", {})
export class EquipmentOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @Field(_type => EquipmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EquipmentCountOrderByAggregateInput | undefined;

  @Field(_type => EquipmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EquipmentMaxOrderByAggregateInput | undefined;

  @Field(_type => EquipmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EquipmentMinOrderByAggregateInput | undefined;
}
