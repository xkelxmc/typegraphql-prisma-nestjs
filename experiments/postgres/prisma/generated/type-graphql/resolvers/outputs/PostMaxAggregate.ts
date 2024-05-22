import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostKind } from "../../enums/PostKind";

@ObjectType("PostMaxAggregate", {})
export class PostMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  uuid!: string | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(_type => Boolean, {
    nullable: true
  })
  published!: boolean | null;

  @Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  subtitle!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  authorId!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  editorId!: number | null;

  @Field(_type => PostKind, {
    nullable: true
  })
  kind!: "BLOG" | "ADVERT" | null;
}
