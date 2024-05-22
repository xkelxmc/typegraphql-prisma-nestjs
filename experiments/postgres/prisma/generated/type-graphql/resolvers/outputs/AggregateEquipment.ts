import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { EquipmentCountAggregate } from "../outputs/EquipmentCountAggregate";
import { EquipmentMaxAggregate } from "../outputs/EquipmentMaxAggregate";
import { EquipmentMinAggregate } from "../outputs/EquipmentMinAggregate";

@ObjectType("AggregateEquipment", {})
export class AggregateEquipment {
  @Field(_type => EquipmentCountAggregate, {
    nullable: true
  })
  _count!: EquipmentCountAggregate | null;

  @Field(_type => EquipmentMinAggregate, {
    nullable: true
  })
  _min!: EquipmentMinAggregate | null;

  @Field(_type => EquipmentMaxAggregate, {
    nullable: true
  })
  _max!: EquipmentMaxAggregate | null;
}
