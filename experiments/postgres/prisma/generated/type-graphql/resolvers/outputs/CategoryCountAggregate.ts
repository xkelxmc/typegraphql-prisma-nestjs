import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("CategoryCountAggregate", {})
export class CategoryCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  name!: number;

  @Field(_type => Int, {
    nullable: false
  })
  slug!: number;

  @Field(_type => Int, {
    nullable: false
  })
  number!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
