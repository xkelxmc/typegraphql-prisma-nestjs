import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("NullableBytesFieldUpdateOperationsInput", {})
export class NullableBytesFieldUpdateOperationsInput {
  @Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  set?: Buffer | undefined;
}
