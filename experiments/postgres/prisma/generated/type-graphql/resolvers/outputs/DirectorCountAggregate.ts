import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("DirectorCountAggregate", {})
export class DirectorCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  firstName!: number;

  @Field(_type => Int, {
    nullable: false
  })
  lastName!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
