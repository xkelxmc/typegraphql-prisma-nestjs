import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentOrderByWithAggregationInput } from "../../../inputs/CommentOrderByWithAggregationInput";
import { CommentScalarWhereWithAggregatesInput } from "../../../inputs/CommentScalarWhereWithAggregatesInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentScalarFieldEnum } from "../../../../enums/CommentScalarFieldEnum";

@ArgsType()
export class GroupByCommentArgs {
  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @Field(_type => [CommentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommentOrderByWithAggregationInput[] | undefined;

  @Field(_type => [CommentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "postId" | "comment">;

  @Field(_type => CommentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommentScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
