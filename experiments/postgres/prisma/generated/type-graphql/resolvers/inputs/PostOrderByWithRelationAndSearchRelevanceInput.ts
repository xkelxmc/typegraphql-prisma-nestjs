import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MainUserOrderByWithRelationAndSearchRelevanceInput";
import { PostOrderByRelevanceInput } from "../inputs/PostOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PostOrderByWithRelationAndSearchRelevanceInput", {})
export class PostOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  uuid?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  subtitle?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  content?: SortOrderInput | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  editorId?: SortOrderInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  kind?: SortOrderInput | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  metadata?: "asc" | "desc" | undefined;

  @Field(_type => MainUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  author?: MainUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @Field(_type => MainUserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  editor?: MainUserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @Field(_type => PostOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: PostOrderByRelevanceInput | undefined;
}
