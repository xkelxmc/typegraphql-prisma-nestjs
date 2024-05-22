import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("UserSumAggregate", {})
export class UserSumAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  age!: number | null;
}
