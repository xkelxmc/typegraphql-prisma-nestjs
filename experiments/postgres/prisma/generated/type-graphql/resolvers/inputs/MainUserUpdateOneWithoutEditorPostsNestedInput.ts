import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateOrConnectWithoutEditorPostsInput } from "../inputs/MainUserCreateOrConnectWithoutEditorPostsInput";
import { MainUserCreateWithoutEditorPostsInput } from "../inputs/MainUserCreateWithoutEditorPostsInput";
import { MainUserUpdateToOneWithWhereWithoutEditorPostsInput } from "../inputs/MainUserUpdateToOneWithWhereWithoutEditorPostsInput";
import { MainUserUpsertWithoutEditorPostsInput } from "../inputs/MainUserUpsertWithoutEditorPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@InputType("MainUserUpdateOneWithoutEditorPostsNestedInput", {})
export class MainUserUpdateOneWithoutEditorPostsNestedInput {
  @Field(_type => MainUserCreateWithoutEditorPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutEditorPostsInput | undefined;

  @Field(_type => MainUserCreateOrConnectWithoutEditorPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutEditorPostsInput | undefined;

  @Field(_type => MainUserUpsertWithoutEditorPostsInput, {
    nullable: true
  })
  upsert?: MainUserUpsertWithoutEditorPostsInput | undefined;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  disconnect?: MainUserWhereInput | undefined;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  delete?: MainUserWhereInput | undefined;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;

  @Field(_type => MainUserUpdateToOneWithWhereWithoutEditorPostsInput, {
    nullable: true
  })
  update?: MainUserUpdateToOneWithWhereWithoutEditorPostsInput | undefined;
}
