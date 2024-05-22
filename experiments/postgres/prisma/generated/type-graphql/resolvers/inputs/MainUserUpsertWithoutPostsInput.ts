import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserUpdateWithoutPostsInput } from "../inputs/MainUserUpdateWithoutPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@InputType("MainUserUpsertWithoutPostsInput", {})
export class MainUserUpsertWithoutPostsInput {
  @Field(_type => MainUserUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: MainUserUpdateWithoutPostsInput;

  @Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: false
  })
  create!: MainUserCreateWithoutPostsInput;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
