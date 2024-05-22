import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";

@ObjectType("Comment", {})
export class Comment {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  post?: Post;

  @Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @Field(_type => String, {
    nullable: false
  })
  comment!: string;
}
