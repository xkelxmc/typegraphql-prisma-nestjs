import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorCountAggregate } from "../outputs/DirectorCountAggregate";
import { DirectorMaxAggregate } from "../outputs/DirectorMaxAggregate";
import { DirectorMinAggregate } from "../outputs/DirectorMinAggregate";

@ObjectType("AggregateDirector", {})
export class AggregateDirector {
  @Field(_type => DirectorCountAggregate, {
    nullable: true
  })
  _count!: DirectorCountAggregate | null;

  @Field(_type => DirectorMinAggregate, {
    nullable: true
  })
  _min!: DirectorMinAggregate | null;

  @Field(_type => DirectorMaxAggregate, {
    nullable: true
  })
  _max!: DirectorMaxAggregate | null;
}
