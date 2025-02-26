import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";

@ObjectType("Equipment", {})
export class Equipment {
  @Field(_type => ID, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | null;
}
