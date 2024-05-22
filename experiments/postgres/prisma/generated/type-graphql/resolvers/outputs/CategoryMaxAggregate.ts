import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("CategoryMaxAggregate", {})
export class CategoryMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  slug!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  number!: number | null;
}
