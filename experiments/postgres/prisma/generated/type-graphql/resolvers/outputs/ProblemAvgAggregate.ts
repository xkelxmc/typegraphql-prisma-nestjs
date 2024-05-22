import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("ProblemAvgAggregate", {})
export class ProblemAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  creatorId!: number | null;
}
