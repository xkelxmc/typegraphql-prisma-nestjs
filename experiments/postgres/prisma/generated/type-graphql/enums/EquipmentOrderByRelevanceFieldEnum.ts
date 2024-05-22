import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum EquipmentOrderByRelevanceFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(EquipmentOrderByRelevanceFieldEnum, {
  name: "EquipmentOrderByRelevanceFieldEnum",
  description: undefined,
});
