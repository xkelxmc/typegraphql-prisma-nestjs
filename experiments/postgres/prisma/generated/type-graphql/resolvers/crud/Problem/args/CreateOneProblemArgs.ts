import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateInput } from "../../../inputs/ProblemCreateInput";

@ArgsType()
export class CreateOneProblemArgs {
  @Field(_type => ProblemCreateInput, {
    nullable: false
  })
  data!: ProblemCreateInput;
}
