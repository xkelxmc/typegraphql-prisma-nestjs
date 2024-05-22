import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { FloatFilter } from "../../../global/inputs/FloatFilter";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { IntNullableListFilter } from "../../../global/inputs/IntNullableListFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { StringNullableFilter } from "../../../global/inputs/StringNullableFilter";
import { StringNullableListFilter } from "../../../global/inputs/StringNullableListFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";

@InputType("MainUserWhereInput", {})
export class MainUserWhereInput {
  @Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  AND?: MainUserWhereInput[] | undefined;

  @Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  OR?: MainUserWhereInput[] | undefined;

  @Field(_type => [MainUserWhereInput], {
    nullable: true
  })
  NOT?: MainUserWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  name?: StringNullableFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  age?: IntFilter | undefined;

  balance?: FloatFilter | undefined;

  @Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  @Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @Field(_type => IntNullableListFilter, {
    nullable: true
  })
  grades?: IntNullableListFilter | undefined;

  @Field(_type => StringNullableListFilter, {
    nullable: true
  })
  aliases?: StringNullableListFilter | undefined;

  posts?: PostListRelationFilter | undefined;

  @Field(_type => PostListRelationFilter, {
    nullable: true
  })
  editorPosts?: PostListRelationFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: StringNullableFilter | undefined) {
    this.name = name;
  }

  @Field(_type => FloatFilter, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: FloatFilter | undefined) {
    this.balance = balance;
  }

  @Field(_type => PostListRelationFilter, {
    nullable: true
  })
  get clientPosts() {
    return this.posts;
  }

  set clientPosts(posts: PostListRelationFilter | undefined) {
    this.posts = posts;
  }
}
