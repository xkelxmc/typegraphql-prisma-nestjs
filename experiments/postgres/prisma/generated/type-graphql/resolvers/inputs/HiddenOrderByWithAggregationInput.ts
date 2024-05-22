import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { HiddenCountOrderByAggregateInput } from "../inputs/HiddenCountOrderByAggregateInput";
import { HiddenMaxOrderByAggregateInput } from "../inputs/HiddenMaxOrderByAggregateInput";
import { HiddenMinOrderByAggregateInput } from "../inputs/HiddenMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("HiddenOrderByWithAggregationInput", {})
export class HiddenOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @Field(_type => HiddenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: HiddenCountOrderByAggregateInput | undefined;

  @Field(_type => HiddenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: HiddenMaxOrderByAggregateInput | undefined;

  @Field(_type => HiddenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: HiddenMinOrderByAggregateInput | undefined;
}
