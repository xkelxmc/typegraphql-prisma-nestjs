import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("CategorySumOrderByAggregateInput", {})
export class CategorySumOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;
}
