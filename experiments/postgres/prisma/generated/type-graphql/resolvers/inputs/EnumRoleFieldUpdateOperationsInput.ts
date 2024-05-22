import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { Role } from "../../enums/Role";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("EnumRoleFieldUpdateOperationsInput", {})
export class EnumRoleFieldUpdateOperationsInput {
  @Field(_type => Role, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | undefined;
}
