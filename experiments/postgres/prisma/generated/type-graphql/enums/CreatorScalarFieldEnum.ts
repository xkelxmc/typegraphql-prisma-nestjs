import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum CreatorScalarFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(CreatorScalarFieldEnum, {
  name: "CreatorScalarFieldEnum",
  description: undefined,
});
