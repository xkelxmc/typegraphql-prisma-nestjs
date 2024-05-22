import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostCountAggregate", {})
export class PostCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  slug!: number;

  @Field(_type => Int, {
    nullable: false
  })
  title!: number;

  @Field(_type => Int, {
    nullable: false
  })
  body!: number;

  @Field(_type => Int, {
    nullable: false
  })
  authorId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
