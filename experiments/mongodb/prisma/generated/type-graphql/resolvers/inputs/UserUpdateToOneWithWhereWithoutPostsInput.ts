import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostsInput } from "../inputs/UserUpdateWithoutPostsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserUpdateToOneWithWhereWithoutPostsInput", {})
export class UserUpdateToOneWithWhereWithoutPostsInput {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => UserUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostsInput;
}
