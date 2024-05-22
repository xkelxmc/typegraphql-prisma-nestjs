import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum JsonNullValueFilter {
  DbNull = "DbNull",
  JsonNull = "JsonNull",
  AnyNull = "AnyNull"
}
registerEnumType(JsonNullValueFilter, {
  name: "JsonNullValueFilter",
  description: undefined,
});
