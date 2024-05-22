import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorUpdateManyWithoutLikesNestedInput } from "../inputs/CreatorUpdateManyWithoutLikesNestedInput";
import { CreatorUpdateOneWithoutProblemsNestedInput } from "../inputs/CreatorUpdateOneWithoutProblemsNestedInput";

@InputType("ProblemUpdateInput", {})
export class ProblemUpdateInput {
  @Field(_type => String, {
    nullable: true
  })
  problemText?: string | undefined;

  @Field(_type => CreatorUpdateManyWithoutLikesNestedInput, {
    nullable: true
  })
  likedBy?: CreatorUpdateManyWithoutLikesNestedInput | undefined;

  @Field(_type => CreatorUpdateOneWithoutProblemsNestedInput, {
    nullable: true
  })
  creator?: CreatorUpdateOneWithoutProblemsNestedInput | undefined;
}
