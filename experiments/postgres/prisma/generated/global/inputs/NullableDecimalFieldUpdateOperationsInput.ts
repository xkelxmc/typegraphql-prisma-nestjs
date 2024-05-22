import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("NullableDecimalFieldUpdateOperationsInput", {})
export class NullableDecimalFieldUpdateOperationsInput {
  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  set?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  increment?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  decrement?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  multiply?: Prisma.Decimal | undefined;

  @Field(_type => DecimalJSScalar, {
    nullable: true
  })
  divide?: Prisma.Decimal | undefined;
}
