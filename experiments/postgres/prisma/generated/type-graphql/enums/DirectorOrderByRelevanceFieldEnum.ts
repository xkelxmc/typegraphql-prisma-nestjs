import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum DirectorOrderByRelevanceFieldEnum {
  firstName = "firstName",
  lastName = "lastName"
}
registerEnumType(DirectorOrderByRelevanceFieldEnum, {
  name: "DirectorOrderByRelevanceFieldEnum",
  description: undefined,
});
