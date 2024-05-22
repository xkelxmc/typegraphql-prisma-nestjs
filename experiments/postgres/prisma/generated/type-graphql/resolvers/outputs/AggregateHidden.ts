import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { HiddenCountAggregate } from "../outputs/HiddenCountAggregate";
import { HiddenMaxAggregate } from "../outputs/HiddenMaxAggregate";
import { HiddenMinAggregate } from "../outputs/HiddenMinAggregate";

@ObjectType("AggregateHidden", {})
export class AggregateHidden {
  @Field(_type => HiddenCountAggregate, {
    nullable: true
  })
  _count!: HiddenCountAggregate | null;

  @Field(_type => HiddenMinAggregate, {
    nullable: true
  })
  _min!: HiddenMinAggregate | null;

  @Field(_type => HiddenMaxAggregate, {
    nullable: true
  })
  _max!: HiddenMaxAggregate | null;
}
