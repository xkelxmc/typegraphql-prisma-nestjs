import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum HiddenOrderByRelevanceFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(HiddenOrderByRelevanceFieldEnum, {
  name: "HiddenOrderByRelevanceFieldEnum",
  description: undefined,
});
