import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum ProblemScalarFieldEnum {
  id = "id",
  problemText = "problemText",
  creatorId = "creatorId"
}
registerEnumType(ProblemScalarFieldEnum, {
  name: "ProblemScalarFieldEnum",
  description: undefined,
});
