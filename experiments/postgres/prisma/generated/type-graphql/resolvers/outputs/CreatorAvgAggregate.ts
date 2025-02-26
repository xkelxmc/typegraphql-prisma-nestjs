import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("CreatorAvgAggregate", {})
export class CreatorAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;
}
