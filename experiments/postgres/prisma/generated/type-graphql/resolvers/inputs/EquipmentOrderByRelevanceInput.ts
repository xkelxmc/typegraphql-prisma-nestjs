import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { EquipmentOrderByRelevanceFieldEnum } from "../../enums/EquipmentOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("EquipmentOrderByRelevanceInput", {})
export class EquipmentOrderByRelevanceInput {
  @Field(_type => [EquipmentOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
