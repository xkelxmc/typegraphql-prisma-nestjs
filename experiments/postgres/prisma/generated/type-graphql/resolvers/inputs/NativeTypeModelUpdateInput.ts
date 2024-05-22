import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("NativeTypeModelUpdateInput", {})
export class NativeTypeModelUpdateInput {
  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  bigInt?: bigint | undefined;

  @Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  byteA?: Buffer | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decimal?: Prisma.Decimal | undefined;
}
