import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { HiddenCountAggregate } from "../outputs/HiddenCountAggregate";
import { HiddenMaxAggregate } from "../outputs/HiddenMaxAggregate";
import { HiddenMinAggregate } from "../outputs/HiddenMinAggregate";

@ObjectType("HiddenGroupBy", {})
export class HiddenGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  name!: string | null;

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
