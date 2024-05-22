import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum CreatorOrderByRelevanceFieldEnum {
  name = "name"
}
registerEnumType(CreatorOrderByRelevanceFieldEnum, {
  name: "CreatorOrderByRelevanceFieldEnum",
  description: undefined,
});
