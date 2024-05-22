import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorCountOrderByAggregateInput } from "../inputs/DirectorCountOrderByAggregateInput";
import { DirectorMaxOrderByAggregateInput } from "../inputs/DirectorMaxOrderByAggregateInput";
import { DirectorMinOrderByAggregateInput } from "../inputs/DirectorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("DirectorOrderByWithAggregationInput", {})
export class DirectorOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @Field(_type => DirectorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DirectorCountOrderByAggregateInput | undefined;

  @Field(_type => DirectorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DirectorMaxOrderByAggregateInput | undefined;

  @Field(_type => DirectorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DirectorMinOrderByAggregateInput | undefined;
}
