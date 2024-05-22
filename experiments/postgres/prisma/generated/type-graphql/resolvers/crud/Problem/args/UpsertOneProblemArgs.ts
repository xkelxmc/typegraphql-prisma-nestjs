import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateInput } from "../../../inputs/ProblemCreateInput";
import { ProblemUpdateInput } from "../../../inputs/ProblemUpdateInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";

@ArgsType()
export class UpsertOneProblemArgs {
  @Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @Field(_type => ProblemCreateInput, {
    nullable: false
  })
  create!: ProblemCreateInput;

  @Field(_type => ProblemUpdateInput, {
    nullable: false
  })
  update!: ProblemUpdateInput;
}
