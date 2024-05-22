import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("StringFieldUpdateOperationsInput", {})
export class StringFieldUpdateOperationsInput {
  @Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
