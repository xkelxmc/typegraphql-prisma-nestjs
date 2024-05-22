import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("CreatorCount", {})
export class CreatorCount {
  @Field(_type => Int, {
    nullable: false
  })
  likes!: number;

  @Field(_type => Int, {
    nullable: false
  })
  problems!: number;
}
