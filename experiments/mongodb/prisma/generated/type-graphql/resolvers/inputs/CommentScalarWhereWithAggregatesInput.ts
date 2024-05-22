import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("CommentScalarWhereWithAggregatesInput", {})
export class CommentScalarWhereWithAggregatesInput {
  @Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  postId?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  comment?: StringWithAggregatesFilter | undefined;
}
