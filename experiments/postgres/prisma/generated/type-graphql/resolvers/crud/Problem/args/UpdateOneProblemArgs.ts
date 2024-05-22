import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemUpdateInput } from "../../../inputs/ProblemUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@ArgsType()
export class UpdateOneProblemArgs {
  @Field(_type => ProblemUpdateInput, {
    nullable: false
  })
  data!: ProblemUpdateInput;

  @Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;
}
