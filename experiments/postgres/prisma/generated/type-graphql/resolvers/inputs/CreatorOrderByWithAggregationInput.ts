import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorAvgOrderByAggregateInput } from "../inputs/CreatorAvgOrderByAggregateInput";
import { CreatorCountOrderByAggregateInput } from "../inputs/CreatorCountOrderByAggregateInput";
import { CreatorMaxOrderByAggregateInput } from "../inputs/CreatorMaxOrderByAggregateInput";
import { CreatorMinOrderByAggregateInput } from "../inputs/CreatorMinOrderByAggregateInput";
import { CreatorSumOrderByAggregateInput } from "../inputs/CreatorSumOrderByAggregateInput";

@InputType("CreatorOrderByWithAggregationInput", {})
export class CreatorOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => CreatorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CreatorCountOrderByAggregateInput | undefined;

  @Field(_type => CreatorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CreatorAvgOrderByAggregateInput | undefined;

  @Field(_type => CreatorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CreatorMaxOrderByAggregateInput | undefined;

  @Field(_type => CreatorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CreatorMinOrderByAggregateInput | undefined;

  @Field(_type => CreatorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CreatorSumOrderByAggregateInput | undefined;
}
