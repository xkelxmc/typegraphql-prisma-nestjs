import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PostOrderByWithRelationInput", {})
export class PostOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  body?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;
}
