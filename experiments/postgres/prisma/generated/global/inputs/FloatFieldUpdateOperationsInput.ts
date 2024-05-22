import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("FloatFieldUpdateOperationsInput", {})
export class FloatFieldUpdateOperationsInput {
  @Field(_type => Float, {
    nullable: true
  })
  set?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  increment?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  decrement?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  multiply?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  divide?: number | undefined;
}
