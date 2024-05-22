import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemUpdateManyMutationInput } from "../../../inputs/ProblemUpdateManyMutationInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";

@ArgsType()
export class UpdateManyProblemArgs {
  @Field(_type => ProblemUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProblemUpdateManyMutationInput;

  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;
}
