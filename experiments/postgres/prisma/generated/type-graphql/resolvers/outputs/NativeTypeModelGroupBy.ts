import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { NativeTypeModelAvgAggregate } from "../outputs/NativeTypeModelAvgAggregate";
import { NativeTypeModelCountAggregate } from "../outputs/NativeTypeModelCountAggregate";
import { NativeTypeModelMaxAggregate } from "../outputs/NativeTypeModelMaxAggregate";
import { NativeTypeModelMinAggregate } from "../outputs/NativeTypeModelMinAggregate";
import { NativeTypeModelSumAggregate } from "../outputs/NativeTypeModelSumAggregate";

@ObjectType("NativeTypeModelGroupBy", {})
export class NativeTypeModelGroupBy {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt!: bigint | null;

  @Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  byteA!: Buffer | null;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal!: Prisma.Decimal | null;

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
