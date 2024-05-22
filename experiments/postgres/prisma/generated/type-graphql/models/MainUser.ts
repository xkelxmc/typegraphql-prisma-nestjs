import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";
import { Post } from "../models/Post";
import { Role } from "../enums/Role";
import { MainUserCount } from "../resolvers/outputs/MainUserCount";

/**
 * User model doc
 */
@ObjectType("MainUser", {
  description: "User model doc"
})
export class MainUser {
  /**
   * User model field doc
   */
  @Field(_type => ID, {
    nullable: false,
    description: "User model field doc"
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  /**
   * renamed field doc
   */
  name!: string | null;

  @Field(_type => Int, {
    nullable: false
  })
  age!: number;

  balance!: number;

  @Field(_type => Float, {
    nullable: false
  })
  amount!: number;

  posts?: Post[];

  @Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  editorPosts?: Post[];

  @Field(_type => [Int], {
    nullable: false
  })
  grades!: number[];

  @Field(_type => [String], {
    nullable: false
  })
  aliases!: string[];

  @Field(_type => MainUserCount, {
    nullable: true
  })
  _count?: MainUserCount | null;

  /**
   * renamed field doc
   */
  @Field(_type => String, {
    nullable: true,
    description: "renamed field doc"
  })
  get firstName(): string | null {
    return this.name ?? null;
  }

  @Field(_type => Float, {
    nullable: false
  })
  get accountBalance(): number {
    return this.balance;
  }
}
