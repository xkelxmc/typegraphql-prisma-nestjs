import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorOrderByRelevanceInput } from "../inputs/CreatorOrderByRelevanceInput";
import { ProblemOrderByRelationAggregateInput } from "../inputs/ProblemOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("CreatorOrderByWithRelationAndSearchRelevanceInput", {})
export class CreatorOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => ProblemOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: ProblemOrderByRelationAggregateInput | undefined;

  @Field(_type => ProblemOrderByRelationAggregateInput, {
    nullable: true
  })
  problems?: ProblemOrderByRelationAggregateInput | undefined;

  @Field(_type => CreatorOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CreatorOrderByRelevanceInput | undefined;
}
