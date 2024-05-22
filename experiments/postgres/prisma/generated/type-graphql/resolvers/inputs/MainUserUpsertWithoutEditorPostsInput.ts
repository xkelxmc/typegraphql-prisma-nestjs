import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserUpdateWithoutEditorPostsInput } from "../inputs/MainUserUpdateWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@InputType("MainUserUpsertWithoutEditorPostsInput", {})
export class MainUserUpsertWithoutEditorPostsInput {
  @Field(_type => MainUserUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  update!: MainUserUpdateWithoutEditorPostsInput;

  @Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutEditorPostsInput;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
