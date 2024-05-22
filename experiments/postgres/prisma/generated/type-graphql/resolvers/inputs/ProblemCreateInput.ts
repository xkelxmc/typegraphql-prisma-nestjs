import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorCreateNestedManyWithoutLikesInput } from "../inputs/CreatorCreateNestedManyWithoutLikesInput";
import { CreatorCreateNestedOneWithoutProblemsInput } from "../inputs/CreatorCreateNestedOneWithoutProblemsInput";

@InputType("ProblemCreateInput", {})
export class ProblemCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @Field(_type => CreatorCreateNestedManyWithoutLikesInput, {
    nullable: true
  })
  likedBy?: CreatorCreateNestedManyWithoutLikesInput | undefined;

  @Field(_type => CreatorCreateNestedOneWithoutProblemsInput, {
    nullable: true
  })
  creator?: CreatorCreateNestedOneWithoutProblemsInput | undefined;
}
