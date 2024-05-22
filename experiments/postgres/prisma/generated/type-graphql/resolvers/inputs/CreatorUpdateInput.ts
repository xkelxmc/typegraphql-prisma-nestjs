import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemUpdateManyWithoutCreatorNestedInput } from "../inputs/ProblemUpdateManyWithoutCreatorNestedInput";
import { ProblemUpdateManyWithoutLikedByNestedInput } from "../inputs/ProblemUpdateManyWithoutLikedByNestedInput";

@InputType("CreatorUpdateInput", {})
export class CreatorUpdateInput {
  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => ProblemUpdateManyWithoutLikedByNestedInput, {
    nullable: true
  })
  likes?: ProblemUpdateManyWithoutLikedByNestedInput | undefined;

  @Field(_type => ProblemUpdateManyWithoutCreatorNestedInput, {
    nullable: true
  })
  problems?: ProblemUpdateManyWithoutCreatorNestedInput | undefined;
}
