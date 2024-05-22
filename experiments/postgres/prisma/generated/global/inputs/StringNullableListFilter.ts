import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";

@InputType("StringNullableListFilter", {})
export class StringNullableListFilter {
  @Field(_type => [String], {
    nullable: true
  })
  equals?: string[] | undefined;

  @Field(_type => String, {
    nullable: true
  })
  has?: string | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  hasEvery?: string[] | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  hasSome?: string[] | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
