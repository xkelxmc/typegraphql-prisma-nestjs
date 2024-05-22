import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { EquipmentOrderByRelevanceInput } from "../inputs/EquipmentOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";

@InputType("EquipmentOrderByWithRelationAndSearchRelevanceInput", {})
export class EquipmentOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @Field(_type => EquipmentOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: EquipmentOrderByRelevanceInput | undefined;
}
