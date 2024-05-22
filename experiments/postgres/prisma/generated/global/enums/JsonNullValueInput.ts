import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum JsonNullValueInput {
  JsonNull = "JsonNull"
}
registerEnumType(JsonNullValueInput, {
  name: "JsonNullValueInput",
  description: undefined,
});
