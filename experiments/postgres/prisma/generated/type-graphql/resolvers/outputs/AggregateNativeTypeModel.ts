import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { NativeTypeModelAvgAggregate } from "../outputs/NativeTypeModelAvgAggregate";
import { NativeTypeModelCountAggregate } from "../outputs/NativeTypeModelCountAggregate";
import { NativeTypeModelMaxAggregate } from "../outputs/NativeTypeModelMaxAggregate";
import { NativeTypeModelMinAggregate } from "../outputs/NativeTypeModelMinAggregate";
import { NativeTypeModelSumAggregate } from "../outputs/NativeTypeModelSumAggregate";

@ObjectType("AggregateNativeTypeModel", {})
export class AggregateNativeTypeModel {
  @Field(_type => NativeTypeModelCountAggregate, {
    nullable: true
  })
  _count!: NativeTypeModelCountAggregate | null;

  @Field(_type => NativeTypeModelAvgAggregate, {
    nullable: true
  })
  _avg!: NativeTypeModelAvgAggregate | null;

  @Field(_type => NativeTypeModelSumAggregate, {
    nullable: true
  })
  _sum!: NativeTypeModelSumAggregate | null;

  @Field(_type => NativeTypeModelMinAggregate, {
    nullable: true
  })
  _min!: NativeTypeModelMinAggregate | null;

  @Field(_type => NativeTypeModelMaxAggregate, {
    nullable: true
  })
  _max!: NativeTypeModelMaxAggregate | null;
}
