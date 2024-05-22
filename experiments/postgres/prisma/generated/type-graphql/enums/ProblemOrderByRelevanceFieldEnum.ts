import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum ProblemOrderByRelevanceFieldEnum {
  problemText = "problemText"
}
registerEnumType(ProblemOrderByRelevanceFieldEnum, {
  name: "ProblemOrderByRelevanceFieldEnum",
  description: undefined,
});
