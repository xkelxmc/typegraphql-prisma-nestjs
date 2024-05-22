import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { BigIntNullableFilter } from "../../../global/inputs/BigIntNullableFilter";
import { BytesNullableFilter } from "../../../global/inputs/BytesNullableFilter";
import { DecimalNullableFilter } from "../../../global/inputs/DecimalNullableFilter";
import { NativeTypeModelWhereInput } from "../inputs/NativeTypeModelWhereInput";

@InputType("NativeTypeModelWhereUniqueInput", {})
export class NativeTypeModelWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  AND?: NativeTypeModelWhereInput[] | undefined;

  @Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  OR?: NativeTypeModelWhereInput[] | undefined;

  @Field(_type => [NativeTypeModelWhereInput], {
    nullable: true
  })
  NOT?: NativeTypeModelWhereInput[] | undefined;

  @Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  bigInt?: BigIntNullableFilter | undefined;

  @Field(_type => BytesNullableFilter, {
    nullable: true
  })
  byteA?: BytesNullableFilter | undefined;

  @Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  decimal?: DecimalNullableFilter | undefined;
}
