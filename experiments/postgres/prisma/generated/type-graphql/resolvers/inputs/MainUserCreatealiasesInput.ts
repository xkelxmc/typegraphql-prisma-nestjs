import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("MainUserCreatealiasesInput", {})
export class MainUserCreatealiasesInput {
  @Field(_type => [String], {
    nullable: false
  })
  set!: string[];
}
