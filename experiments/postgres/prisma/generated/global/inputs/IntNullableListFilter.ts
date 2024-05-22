import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("IntNullableListFilter", {})
export class IntNullableListFilter {
  @Field(_type => [Int], {
    nullable: true
  })
  equals?: number[] | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  has?: number | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  hasEvery?: number[] | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  hasSome?: number[] | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
