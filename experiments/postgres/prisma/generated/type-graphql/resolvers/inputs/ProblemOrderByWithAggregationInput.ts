import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemAvgOrderByAggregateInput } from "../inputs/ProblemAvgOrderByAggregateInput";
import { ProblemCountOrderByAggregateInput } from "../inputs/ProblemCountOrderByAggregateInput";
import { ProblemMaxOrderByAggregateInput } from "../inputs/ProblemMaxOrderByAggregateInput";
import { ProblemMinOrderByAggregateInput } from "../inputs/ProblemMinOrderByAggregateInput";
import { ProblemSumOrderByAggregateInput } from "../inputs/ProblemSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";

@InputType("ProblemOrderByWithAggregationInput", {})
export class ProblemOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  problemText?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  creatorId?: SortOrderInput | undefined;

  @Field(_type => ProblemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProblemCountOrderByAggregateInput | undefined;

  @Field(_type => ProblemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProblemAvgOrderByAggregateInput | undefined;

  @Field(_type => ProblemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProblemMaxOrderByAggregateInput | undefined;

  @Field(_type => ProblemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProblemMinOrderByAggregateInput | undefined;

  @Field(_type => ProblemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProblemSumOrderByAggregateInput | undefined;
}
