import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("CommentOrderByWithAggregationInput", {})
export class CommentOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  comment?: "asc" | "desc" | undefined;

  @Field(_type => CommentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentCountOrderByAggregateInput | undefined;

  @Field(_type => CommentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentMaxOrderByAggregateInput | undefined;

  @Field(_type => CommentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentMinOrderByAggregateInput | undefined;
}
