import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressCreateInput } from "../inputs/UserAddressCreateInput";

@InputType("UserUpdateWithoutPostsInput", {})
export class UserUpdateWithoutPostsInput {
  @Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  age?: number | undefined;

  @Field(_type => UserAddressCreateInput, {
    nullable: true
  })
  address?: UserAddressCreateInput | undefined;
}
