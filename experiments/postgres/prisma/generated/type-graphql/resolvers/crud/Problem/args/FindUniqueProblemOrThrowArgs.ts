import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@ArgsType()
export class FindUniqueProblemOrThrowArgs {
  @Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;
}
