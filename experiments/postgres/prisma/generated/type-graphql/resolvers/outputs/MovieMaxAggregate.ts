import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("MovieMaxAggregate", {})
export class MovieMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  directorFirstName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  directorLastName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  title!: string | null;
}
