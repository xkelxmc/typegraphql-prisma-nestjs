import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum MainUserOrderByRelevanceFieldEnum {
  email = "email",
  firstName = "name",
  aliases = "aliases"
}
registerEnumType(MainUserOrderByRelevanceFieldEnum, {
  name: "MainUserOrderByRelevanceFieldEnum",
  description: undefined,
});
