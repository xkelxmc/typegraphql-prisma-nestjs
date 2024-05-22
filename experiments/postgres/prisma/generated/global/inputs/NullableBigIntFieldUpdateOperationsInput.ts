import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("NullableBigIntFieldUpdateOperationsInput", {})
export class NullableBigIntFieldUpdateOperationsInput {
  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  set?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  increment?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  decrement?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  multiply?: bigint | undefined;

  @Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  divide?: bigint | undefined;
}
