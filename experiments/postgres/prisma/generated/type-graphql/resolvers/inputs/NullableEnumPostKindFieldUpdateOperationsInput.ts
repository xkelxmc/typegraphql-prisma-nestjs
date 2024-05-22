import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostKind } from "../../enums/PostKind";

@InputType("NullableEnumPostKindFieldUpdateOperationsInput", {})
export class NullableEnumPostKindFieldUpdateOperationsInput {
  @Field(_type => PostKind, {
    nullable: true
  })
  set?: "BLOG" | "ADVERT" | undefined;
}
