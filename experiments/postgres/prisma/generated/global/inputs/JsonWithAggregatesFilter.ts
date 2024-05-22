import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@InputType("JsonWithAggregatesFilter", {})
export class JsonWithAggregatesFilter {
  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  path?: string[] | undefined;

  @Field(_type => String, {
    nullable: true
  })
  string_contains?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  string_starts_with?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  string_ends_with?: string | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  array_contains?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  array_starts_with?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  array_ends_with?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  lt?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  lte?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  gt?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  gte?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedJsonFilter, {
    nullable: true
  })
  _min?: NestedJsonFilter | undefined;

  @Field(_type => NestedJsonFilter, {
    nullable: true
  })
  _max?: NestedJsonFilter | undefined;
}
