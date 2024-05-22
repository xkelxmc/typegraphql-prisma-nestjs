import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieCountOrderByAggregateInput } from "../inputs/MovieCountOrderByAggregateInput";
import { MovieMaxOrderByAggregateInput } from "../inputs/MovieMaxOrderByAggregateInput";
import { MovieMinOrderByAggregateInput } from "../inputs/MovieMinOrderByAggregateInput";

@InputType("MovieOrderByWithAggregationInput", {})
export class MovieOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  directorFirstName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  directorLastName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(_type => MovieCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovieCountOrderByAggregateInput | undefined;

  @Field(_type => MovieMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovieMaxOrderByAggregateInput | undefined;

  @Field(_type => MovieMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovieMinOrderByAggregateInput | undefined;
}
