import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("MainUserAvgAggregate", {})
export class MainUserAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  age!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  balance!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  amount!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  grades!: number | null;
}
