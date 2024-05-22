import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput";

@InputType("ProblemCreateWithoutCreatorInput", {})
export class ProblemCreateWithoutCreatorInput {
  @Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;
}
