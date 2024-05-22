import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateNestedManyWithoutCreatorInput } from "../inputs/ProblemCreateNestedManyWithoutCreatorInput";

@InputType("CreatorCreateWithoutLikesInput", {})
export class CreatorCreateWithoutLikesInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => ProblemCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  problems?: ProblemCreateNestedManyWithoutCreatorInput | undefined;
}
