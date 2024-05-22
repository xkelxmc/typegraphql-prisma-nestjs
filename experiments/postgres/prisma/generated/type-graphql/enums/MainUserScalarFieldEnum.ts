import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum MainUserScalarFieldEnum {
  id = "id",
  email = "email",
  firstName = "name",
  age = "age",
  accountBalance = "balance",
  amount = "amount",
  role = "role",
  grades = "grades",
  aliases = "aliases"
}
registerEnumType(MainUserScalarFieldEnum, {
  name: "MainUserScalarFieldEnum",
  description: undefined,
});
