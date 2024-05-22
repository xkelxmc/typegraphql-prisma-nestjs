import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreateManypostAndReturnOutputTypeEditorArgs } from "./args/CreateManypostAndReturnOutputTypeEditorArgs";
import { MainUser } from "../../models/MainUser";
import { PostKind } from "../../enums/PostKind";

@ObjectType("CreateManypostAndReturnOutputType", {})
export class CreateManypostAndReturnOutputType {
  @Field(_type => String, {
    nullable: false
  })
  uuid!: string;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

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
  content!: string | null;

  @Field(_type => Int, {
    nullable: false
  })
  authorId!: number;

  @Field(_type => Int, {
    nullable: true
  })
  editorId!: number | null;

  @Field(_type => PostKind, {
    nullable: true
  })
  kind!: "BLOG" | "ADVERT" | null;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  metadata!: Prisma.JsonValue;

  @Field(_type => MainUser, {
    nullable: false
  })
  author!: MainUser;

  editor!: MainUser | null;

  @Field(_type => MainUser, {
    name: "editor",
    nullable: true
  })
  getEditor(@Root() root: CreateManypostAndReturnOutputType, @Args() args: CreateManypostAndReturnOutputTypeEditorArgs): MainUser | null {
    return root.editor;
  }
}
