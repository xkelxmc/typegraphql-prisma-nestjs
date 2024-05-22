import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("MovieCountAggregate", {})
export class MovieCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  directorFirstName!: number;

  @Field(_type => Int, {
    nullable: false
  })
  directorLastName!: number;

  @Field(_type => Int, {
    nullable: false
  })
  title!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
