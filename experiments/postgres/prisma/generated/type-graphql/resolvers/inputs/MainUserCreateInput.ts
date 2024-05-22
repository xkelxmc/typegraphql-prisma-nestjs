import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { Role } from "../../enums/Role";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutEditorInput } from "../inputs/PostCreateNestedManyWithoutEditorInput";

@InputType("MainUserCreateInput", {})
export class MainUserCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  name?: string | undefined;

  @Field(_type => Int, {
    nullable: false
  })
  age!: number;

  balance!: number;

  @Field(_type => Float, {
    nullable: false
  })
  amount!: number;

  @Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @Field(_type => [Int], {
    nullable: true
  })
  grades?: number[] | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  aliases?: string[] | undefined;

  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @Field(_type => PostCreateNestedManyWithoutEditorInput, {
    nullable: true
  })
  editorPosts?: PostCreateNestedManyWithoutEditorInput | undefined;

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
    nullable: false
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: number) {
    this.balance = balance;
  }

  @Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostCreateNestedManyWithoutAuthorInput | undefined) {
    this.posts = posts;
  }
}
