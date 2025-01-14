import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("BoolFieldUpdateOperationsInput", {})
export class BoolFieldUpdateOperationsInput {
  @Field(_type => Boolean, {
    nullable: true
  })
  set?: boolean | undefined;
}
