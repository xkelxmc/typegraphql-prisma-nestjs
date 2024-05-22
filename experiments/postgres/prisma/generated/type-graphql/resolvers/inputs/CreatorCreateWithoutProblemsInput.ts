import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateNestedManyWithoutLikedByInput } from "../inputs/ProblemCreateNestedManyWithoutLikedByInput";

@InputType("CreatorCreateWithoutProblemsInput", {})
export class CreatorCreateWithoutProblemsInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => ProblemCreateNestedManyWithoutLikedByInput, {
    nullable: true
  })
  likes?: ProblemCreateNestedManyWithoutLikedByInput | undefined;
}
