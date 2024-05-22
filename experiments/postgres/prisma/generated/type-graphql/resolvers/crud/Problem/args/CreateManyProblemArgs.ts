import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateManyInput } from "../../../inputs/ProblemCreateManyInput";

@ArgsType()
export class CreateManyProblemArgs {
  @Field(_type => [ProblemCreateManyInput], {
    nullable: false
  })
  data!: ProblemCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
