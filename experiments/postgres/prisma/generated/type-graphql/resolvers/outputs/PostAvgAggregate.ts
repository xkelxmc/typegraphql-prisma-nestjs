import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("PostAvgAggregate", {})
export class PostAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  authorId!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  editorId!: number | null;
}
