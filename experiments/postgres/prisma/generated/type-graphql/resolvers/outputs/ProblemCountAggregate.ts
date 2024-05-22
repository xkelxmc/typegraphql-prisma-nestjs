import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("ProblemCountAggregate", {})
export class ProblemCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  problemText!: number;

  @Field(_type => Int, {
    nullable: false
  })
  creatorId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
