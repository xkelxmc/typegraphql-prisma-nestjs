import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum CategoryOrderByRelevanceFieldEnum {
  name = "name",
  slug = "slug"
}
registerEnumType(CategoryOrderByRelevanceFieldEnum, {
  name: "CategoryOrderByRelevanceFieldEnum",
  description: undefined,
});
