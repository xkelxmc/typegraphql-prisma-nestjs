import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";
import { Director } from "../models/Director";

@ObjectType("Movie", {})
export class Movie {
  @Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  director?: Director;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;
}
