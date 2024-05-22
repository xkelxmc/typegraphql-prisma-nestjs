import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorAvgAggregate } from "../outputs/CreatorAvgAggregate";
import { CreatorCountAggregate } from "../outputs/CreatorCountAggregate";
import { CreatorMaxAggregate } from "../outputs/CreatorMaxAggregate";
import { CreatorMinAggregate } from "../outputs/CreatorMinAggregate";
import { CreatorSumAggregate } from "../outputs/CreatorSumAggregate";

@ObjectType("AggregateCreator", {})
export class AggregateCreator {
  @Field(_type => CreatorCountAggregate, {
    nullable: true
  })
  _count!: CreatorCountAggregate | null;

  @Field(_type => CreatorAvgAggregate, {
    nullable: true
  })
  _avg!: CreatorAvgAggregate | null;

  @Field(_type => CreatorSumAggregate, {
    nullable: true
  })
  _sum!: CreatorSumAggregate | null;

  @Field(_type => CreatorMinAggregate, {
    nullable: true
  })
  _min!: CreatorMinAggregate | null;

  @Field(_type => CreatorMaxAggregate, {
    nullable: true
  })
  _max!: CreatorMaxAggregate | null;
}
