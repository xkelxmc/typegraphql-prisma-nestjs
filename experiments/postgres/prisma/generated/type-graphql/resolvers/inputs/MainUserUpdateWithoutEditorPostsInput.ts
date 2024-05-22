import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { Role } from "../../enums/Role";

@InputType("MainUserUpdateWithoutEditorPostsInput", {})
export class MainUserUpdateWithoutEditorPostsInput {
  @Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  name?: string | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  age?: number | undefined;

  balance?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  amount?: number | undefined;

  @Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  grades?: number[] | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  aliases?: string[] | undefined;

  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @Field(_type => String, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: string | undefined) {
    this.name = name;
  }

  @Field(_type => Float, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number | undefined) {
    this.balance = balance;
  }

  @Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostUpdateManyWithoutAuthorNestedInput | undefined) {
    this.posts = posts;
  }
}
