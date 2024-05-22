import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum NativeTypeModelScalarFieldEnum {
  id = "id",
  bigInt = "bigInt",
  byteA = "byteA",
  decimal = "decimal"
}
registerEnumType(NativeTypeModelScalarFieldEnum, {
  name: "NativeTypeModelScalarFieldEnum",
  description: undefined,
});
