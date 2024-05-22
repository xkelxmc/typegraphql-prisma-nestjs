import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("NullableIntFieldUpdateOperationsInput", {})
export class NullableIntFieldUpdateOperationsInput {
  @Field(_type => Int, {
    nullable: true
  })
  set?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  increment?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  decrement?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  multiply?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  divide?: number | undefined;
}
