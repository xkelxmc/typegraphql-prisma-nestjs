import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateOrConnectWithoutEditorPostsInput } from "../inputs/MainUserCreateOrConnectWithoutEditorPostsInput";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@InputType("MainUserCreateNestedOneWithoutEditorPostsInput", {})
export class MainUserCreateNestedOneWithoutEditorPostsInput {
  @Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutEditorPostsInput | undefined;

  @Field(_type => MainUserCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutEditorPostsInput | undefined;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;
}
