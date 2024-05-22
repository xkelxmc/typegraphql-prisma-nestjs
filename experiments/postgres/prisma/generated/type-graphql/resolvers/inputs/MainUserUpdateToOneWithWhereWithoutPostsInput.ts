import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserUpdateWithoutPostsInput } from "../inputs/MainUserUpdateWithoutPostsInput";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@InputType("MainUserUpdateToOneWithWhereWithoutPostsInput", {})
export class MainUserUpdateToOneWithWhereWithoutPostsInput {
  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @Field(_type => MainUserUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: MainUserUpdateWithoutPostsInput;
}
