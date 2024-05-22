import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorUpdateManyWithoutLikesNestedInput } from "../inputs/CreatorUpdateManyWithoutLikesNestedInput";

@InputType("ProblemUpdateWithoutCreatorInput", {})
export class ProblemUpdateWithoutCreatorInput {
  @Field(_type => String, {
    nullable: true
  })
  problemText?: string | undefined;

  @Field(_type => CreatorUpdateManyWithoutLikesNestedInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesNestedInput | undefined;
}
