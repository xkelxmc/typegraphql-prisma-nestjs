import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@InputType("UserAddressCreateInput", {})
export class UserAddressCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  street!: string;

  @Field(_type => Int, {
    nullable: true
  })
  number?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  city!: string;
}
