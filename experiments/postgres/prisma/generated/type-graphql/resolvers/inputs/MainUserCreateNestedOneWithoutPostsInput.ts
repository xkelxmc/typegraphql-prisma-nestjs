import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateOrConnectWithoutPostsInput } from "../inputs/MainUserCreateOrConnectWithoutPostsInput";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@InputType("MainUserCreateNestedOneWithoutPostsInput", {})
export class MainUserCreateNestedOneWithoutPostsInput {
  @Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutPostsInput | undefined;

  @Field(_type => MainUserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutPostsInput | undefined;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;
}
