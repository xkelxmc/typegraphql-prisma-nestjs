import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { Role } from "../../enums/Role";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostUpdateManyWithoutEditorNestedInput } from "../inputs/PostUpdateManyWithoutEditorNestedInput";

@InputType("MainUserUpdateWithoutPostsInput", {})
export class MainUserUpdateWithoutPostsInput {
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

  @Field(_type => PostUpdateManyWithoutEditorNestedInput, {
    nullable: true
  })
  editorPosts?: PostUpdateManyWithoutEditorNestedInput | undefined;

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
}
