import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("CategoryCreateInput", {})
export class CategoryCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @Field(_type => Int, {
    nullable: false
  })
  number!: number;
}
