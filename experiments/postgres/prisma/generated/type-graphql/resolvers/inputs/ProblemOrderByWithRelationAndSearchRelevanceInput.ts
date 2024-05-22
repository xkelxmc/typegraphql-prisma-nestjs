import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorOrderByRelationAggregateInput } from "../inputs/CreatorOrderByRelationAggregateInput";
import { CreatorOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CreatorOrderByWithRelationAndSearchRelevanceInput";
import { ProblemOrderByRelevanceInput } from "../inputs/ProblemOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";

@InputType("ProblemOrderByWithRelationAndSearchRelevanceInput", {})
export class ProblemOrderByWithRelationAndSearchRelevanceInput {
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

  @Field(_type => CreatorOrderByRelationAggregateInput, {
    nullable: true
  })
  likedBy?: CreatorOrderByRelationAggregateInput | undefined;

  @Field(_type => CreatorOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  creator?: CreatorOrderByWithRelationAndSearchRelevanceInput | undefined;

  @Field(_type => ProblemOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: ProblemOrderByRelevanceInput | undefined;
}
