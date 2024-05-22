import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum HiddenScalarFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(HiddenScalarFieldEnum, {
  name: "HiddenScalarFieldEnum",
  description: undefined,
});
