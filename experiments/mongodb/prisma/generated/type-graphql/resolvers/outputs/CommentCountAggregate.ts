import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("CommentCountAggregate", {})
export class CommentCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  postId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  comment!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
