import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum EquipmentScalarFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(EquipmentScalarFieldEnum, {
  name: "EquipmentScalarFieldEnum",
  description: undefined,
});
