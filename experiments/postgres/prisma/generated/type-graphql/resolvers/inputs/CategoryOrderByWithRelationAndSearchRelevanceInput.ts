import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { CategoryOrderByRelevanceInput } from "../inputs/CategoryOrderByRelevanceInput";

@InputType("CategoryOrderByWithRelationAndSearchRelevanceInput", {})
export class CategoryOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @Field(_type => CategoryOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CategoryOrderByRelevanceInput | undefined;
}
