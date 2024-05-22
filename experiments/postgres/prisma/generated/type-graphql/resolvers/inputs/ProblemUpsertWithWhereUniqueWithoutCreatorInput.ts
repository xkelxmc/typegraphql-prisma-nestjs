import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemUpdateWithoutCreatorInput } from "../inputs/ProblemUpdateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@InputType("ProblemUpsertWithWhereUniqueWithoutCreatorInput", {})
export class ProblemUpsertWithWhereUniqueWithoutCreatorInput {
  @Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @Field(_type => ProblemUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: ProblemUpdateWithoutCreatorInput;

  @Field(_type => ProblemCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: ProblemCreateWithoutCreatorInput;
}
