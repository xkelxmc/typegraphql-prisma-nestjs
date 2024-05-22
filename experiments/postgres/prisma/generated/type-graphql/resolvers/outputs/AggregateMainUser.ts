import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserAvgAggregate } from "../outputs/MainUserAvgAggregate";
import { MainUserCountAggregate } from "../outputs/MainUserCountAggregate";
import { MainUserMaxAggregate } from "../outputs/MainUserMaxAggregate";
import { MainUserMinAggregate } from "../outputs/MainUserMinAggregate";
import { MainUserSumAggregate } from "../outputs/MainUserSumAggregate";

@ObjectType("AggregateMainUser", {})
export class AggregateMainUser {
  @Field(_type => MainUserCountAggregate, {
    nullable: true
  })
  _count!: MainUserCountAggregate | null;

  @Field(_type => MainUserAvgAggregate, {
    nullable: true
  })
  _avg!: MainUserAvgAggregate | null;

  @Field(_type => MainUserSumAggregate, {
    nullable: true
  })
  _sum!: MainUserSumAggregate | null;

  @Field(_type => MainUserMinAggregate, {
    nullable: true
  })
  _min!: MainUserMinAggregate | null;

  @Field(_type => MainUserMaxAggregate, {
    nullable: true
  })
  _max!: MainUserMaxAggregate | null;
}
