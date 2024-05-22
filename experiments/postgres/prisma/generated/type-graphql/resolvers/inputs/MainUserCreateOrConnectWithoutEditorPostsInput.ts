import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@InputType("MainUserCreateOrConnectWithoutEditorPostsInput", {})
export class MainUserCreateOrConnectWithoutEditorPostsInput {
  @Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;

  @Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutEditorPostsInput;
}
