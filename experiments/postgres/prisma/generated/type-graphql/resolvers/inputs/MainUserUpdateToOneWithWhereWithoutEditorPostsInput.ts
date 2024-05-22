import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserUpdateWithoutEditorPostsInput } from "../inputs/MainUserUpdateWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@InputType("MainUserUpdateToOneWithWhereWithoutEditorPostsInput", {})
export class MainUserUpdateToOneWithWhereWithoutEditorPostsInput {
  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @Field(_type => MainUserUpdateWithoutEditorPostsInput, {
    nullable: false
  })
  data!: MainUserUpdateWithoutEditorPostsInput;
}
