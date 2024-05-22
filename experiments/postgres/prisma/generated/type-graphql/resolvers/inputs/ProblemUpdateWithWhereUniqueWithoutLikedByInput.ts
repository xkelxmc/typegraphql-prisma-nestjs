import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemUpdateWithoutLikedByInput } from "../inputs/ProblemUpdateWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@InputType("ProblemUpdateWithWhereUniqueWithoutLikedByInput", {})
export class ProblemUpdateWithWhereUniqueWithoutLikedByInput {
  @Field(_type => ProblemWhereUniqueInput, {
    nullable: false
  })
  where!: ProblemWhereUniqueInput;

  @Field(_type => ProblemUpdateWithoutLikedByInput, {
    nullable: false
  })
  data!: ProblemUpdateWithoutLikedByInput;
}
