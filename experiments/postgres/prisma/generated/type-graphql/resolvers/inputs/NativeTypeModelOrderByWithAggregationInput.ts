import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { NativeTypeModelAvgOrderByAggregateInput } from "../inputs/NativeTypeModelAvgOrderByAggregateInput";
import { NativeTypeModelCountOrderByAggregateInput } from "../inputs/NativeTypeModelCountOrderByAggregateInput";
import { NativeTypeModelMaxOrderByAggregateInput } from "../inputs/NativeTypeModelMaxOrderByAggregateInput";
import { NativeTypeModelMinOrderByAggregateInput } from "../inputs/NativeTypeModelMinOrderByAggregateInput";
import { NativeTypeModelSumOrderByAggregateInput } from "../inputs/NativeTypeModelSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";

@InputType("NativeTypeModelOrderByWithAggregationInput", {})
export class NativeTypeModelOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  bigInt?: SortOrderInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  byteA?: SortOrderInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  decimal?: SortOrderInput | undefined;

  @Field(_type => NativeTypeModelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NativeTypeModelCountOrderByAggregateInput | undefined;

  @Field(_type => NativeTypeModelAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NativeTypeModelAvgOrderByAggregateInput | undefined;

  @Field(_type => NativeTypeModelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NativeTypeModelMaxOrderByAggregateInput | undefined;

  @Field(_type => NativeTypeModelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NativeTypeModelMinOrderByAggregateInput | undefined;

  @Field(_type => NativeTypeModelSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NativeTypeModelSumOrderByAggregateInput | undefined;
}
