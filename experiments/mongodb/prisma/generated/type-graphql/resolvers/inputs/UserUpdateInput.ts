import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { UserAddressCreateInput } from "../inputs/UserAddressCreateInput";

@InputType("UserUpdateInput", {})
export class UserUpdateInput {
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

  @Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;
}
