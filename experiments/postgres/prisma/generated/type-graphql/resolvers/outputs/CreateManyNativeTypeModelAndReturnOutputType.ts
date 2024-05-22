import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@ObjectType("CreateManyNativeTypeModelAndReturnOutputType", {})
export class CreateManyNativeTypeModelAndReturnOutputType {
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
}