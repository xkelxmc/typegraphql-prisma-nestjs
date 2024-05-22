import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/MainUserUpdateOneRequiredWithoutPostsNestedInput";
import { MainUserUpdateOneWithoutEditorPostsNestedInput } from "../inputs/MainUserUpdateOneWithoutEditorPostsNestedInput";
import { PostKind } from "../../enums/PostKind";

@InputType("PostUpdateInput", {})
export class PostUpdateInput {
  @Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  subtitle?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @Field(_type => PostKind, {
    nullable: true
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  metadata?: Prisma.InputJsonValue | undefined;

  @Field(_type => MainUserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  author?: MainUserUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @Field(_type => MainUserUpdateOneWithoutEditorPostsNestedInput, {
    nullable: true
  })
  editor?: MainUserUpdateOneWithoutEditorPostsNestedInput | undefined;
}
