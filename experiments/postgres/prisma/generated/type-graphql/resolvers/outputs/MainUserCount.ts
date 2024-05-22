import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCountEditorPostsArgs } from "./args/MainUserCountEditorPostsArgs";
import { MainUserCountPostsArgs } from "./args/MainUserCountPostsArgs";

@ObjectType("MainUserCount", {})
export class MainUserCount {
  posts!: number;
  editorPosts!: number;

  @Field(_type => Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@Root() root: MainUserCount, @Args() args: MainUserCountPostsArgs): number {
    return root.posts;
  }

  @Field(_type => Int, {
    name: "editorPosts",
    nullable: false
  })
  getEditorPosts(@Root() root: MainUserCount, @Args() args: MainUserCountEditorPostsArgs): number {
    return root.editorPosts;
  }
}
