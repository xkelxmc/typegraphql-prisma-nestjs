import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("PostCountAggregate", {})
export class PostCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  uuid!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  published!: number;

  @Field(_type => Int, {
    nullable: false
  })
  title!: number;

  @Field(_type => Int, {
    nullable: false
  })
  subtitle!: number;

  @Field(_type => Int, {
    nullable: false
  })
  content!: number;

  @Field(_type => Int, {
    nullable: false
  })
  authorId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  editorId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  kind!: number;

  @Field(_type => Int, {
    nullable: false
  })
  metadata!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
