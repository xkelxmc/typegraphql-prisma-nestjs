import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { NestedBytesNullableFilter } from "../inputs/NestedBytesNullableFilter";
import { NestedBytesNullableWithAggregatesFilter } from "../inputs/NestedBytesNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@InputType("BytesNullableWithAggregatesFilter", {})
export class BytesNullableWithAggregatesFilter {
  @Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  equals?: Buffer | undefined;

  @Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  in?: Buffer[] | undefined;

  @Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  notIn?: Buffer[] | undefined;

  @Field(_type => NestedBytesNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBytesNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  _min?: NestedBytesNullableFilter | undefined;

  @Field(_type => NestedBytesNullableFilter, {
    nullable: true
  })
  _max?: NestedBytesNullableFilter | undefined;
}
