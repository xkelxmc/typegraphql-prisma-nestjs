import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";

@ObjectType("Post", {})
export class Post {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => String, {
    nullable: false
  })
  body!: string;

  comments?: Comment[];

  author?: User;

  @Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @Field(_type => PostCount, {
    nullable: true
  })
  _count?: PostCount | null;
}
