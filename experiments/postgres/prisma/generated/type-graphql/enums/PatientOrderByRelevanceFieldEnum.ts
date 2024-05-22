import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum PatientOrderByRelevanceFieldEnum {
  firstName = "firstName",
  lastName = "lastName",
  email = "email"
}
registerEnumType(PatientOrderByRelevanceFieldEnum, {
  name: "PatientOrderByRelevanceFieldEnum",
  description: undefined,
});
