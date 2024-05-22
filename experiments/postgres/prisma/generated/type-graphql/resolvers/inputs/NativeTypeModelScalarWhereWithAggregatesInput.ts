import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { BigIntNullableWithAggregatesFilter } from "../../../global/inputs/BigIntNullableWithAggregatesFilter";
import { BytesNullableWithAggregatesFilter } from "../../../global/inputs/BytesNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../../../global/inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../../../global/inputs/IntWithAggregatesFilter";

@InputType("NativeTypeModelScalarWhereWithAggregatesInput", {})
export class NativeTypeModelScalarWhereWithAggregatesInput {
  @Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [NativeTypeModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NativeTypeModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => BigIntNullableWithAggregatesFilter, {
    nullable: true
  })
  bigInt?: BigIntNullableWithAggregatesFilter | undefined;

  @Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  byteA?: BytesNullableWithAggregatesFilter | undefined;

  @Field(_type => DecimalNullableWithAggregatesFilter, {
    nullable: true
  })
  decimal?: DecimalNullableWithAggregatesFilter | undefined;
}
