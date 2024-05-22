import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@ObjectType("UserAddress", {})
export class UserAddress {
  @Field(_type => String, {
    nullable: false
  })
  street!: string;

  @Field(_type => Int, {
    nullable: true
  })
  number?: number | null;

  @Field(_type => String, {
    nullable: false
  })
  city!: string;
}
