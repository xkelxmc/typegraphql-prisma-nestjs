import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("MainUserUpdategradesInput", {})
export class MainUserUpdategradesInput {
  @Field(_type => [Int], {
    nullable: true
  })
  set?: number[] | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  push?: number[] | undefined;
}
