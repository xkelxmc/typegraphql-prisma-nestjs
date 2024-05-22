import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";
import { MainUser } from "../models/MainUser";
import { PostKind } from "../enums/PostKind";

@ObjectType("Post", {})
export class Post {
  /**
   * first line of comment
   * second line of comment
   * third line of comment
   */
  @Field(_type => ID, {
    nullable: false,
    description: "first line of comment\nsecond line of comment\nthird line of comment"
  })
  uuid!: string;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  subtitle?: string;

  @Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  author?: MainUser;

  @Field(_type => Int, {
    nullable: false
  })
  authorId!: number;

  editor?: MainUser | null;

  editorId?: number | null;

  @Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | null;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.JsonValue;
}
