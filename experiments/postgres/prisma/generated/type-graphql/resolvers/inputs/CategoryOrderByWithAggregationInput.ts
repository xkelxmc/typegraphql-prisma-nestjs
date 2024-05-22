import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { CategoryAvgOrderByAggregateInput } from "../inputs/CategoryAvgOrderByAggregateInput";
import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
import { CategorySumOrderByAggregateInput } from "../inputs/CategorySumOrderByAggregateInput";

@InputType("CategoryOrderByWithAggregationInput", {})
export class CategoryOrderByWithAggregationInput {
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

  @Field(_type => CategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoryCountOrderByAggregateInput | undefined;

  @Field(_type => CategoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoryAvgOrderByAggregateInput | undefined;

  @Field(_type => CategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoryMaxOrderByAggregateInput | undefined;

  @Field(_type => CategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoryMinOrderByAggregateInput | undefined;

  @Field(_type => CategorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategorySumOrderByAggregateInput | undefined;
}
