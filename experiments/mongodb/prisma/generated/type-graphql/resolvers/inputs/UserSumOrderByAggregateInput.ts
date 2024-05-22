import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("UserSumOrderByAggregateInput", {})
export class UserSumOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;
}
