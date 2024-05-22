import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";
import { Problem } from "../models/Problem";
import { CreatorCount } from "../resolvers/outputs/CreatorCount";

@ObjectType("Creator", {})
export class Creator {
  @Field(_type => ID, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  likes?: Problem[];

  problems?: Problem[];

  @Field(_type => CreatorCount, {
    nullable: true
  })
  _count?: CreatorCount | null;
}
