import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";

@ObjectType("AggregateMovie", {})
export class AggregateMovie {
  @Field(_type => MovieCountAggregate, {
    nullable: true
  })
  _count!: MovieCountAggregate | null;

  @Field(_type => MovieMinAggregate, {
    nullable: true
  })
  _min!: MovieMinAggregate | null;

  @Field(_type => MovieMaxAggregate, {
    nullable: true
  })
  _max!: MovieMaxAggregate | null;
}
