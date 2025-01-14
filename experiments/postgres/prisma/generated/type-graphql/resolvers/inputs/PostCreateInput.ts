import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { PostKind } from "../../enums/PostKind";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateNestedOneWithoutEditorPostsInput } from "../inputs/MainUserCreateNestedOneWithoutEditorPostsInput";
import { MainUserCreateNestedOneWithoutPostsInput } from "../inputs/MainUserCreateNestedOneWithoutPostsInput";

@InputType("PostCreateInput", {})
export class PostCreateInput {
  @Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;

  @Field(_type => String, {
    nullable: false
  })
  subtitle!: string;

  @Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.InputJsonValue;

  @Field(_type => MainUserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  author!: MainUserCreateNestedOneWithoutPostsInput;

  @Field(_type => MainUserCreateNestedOneWithoutEditorPostsInput, {
    nullable: true
  })
  editor?: MainUserCreateNestedOneWithoutEditorPostsInput | undefined;
}
