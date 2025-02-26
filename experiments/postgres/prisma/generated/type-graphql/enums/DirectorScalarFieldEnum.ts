import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum DirectorScalarFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
registerEnumType(DirectorScalarFieldEnum, {
  name: "DirectorScalarFieldEnum",
  description: undefined,
});
