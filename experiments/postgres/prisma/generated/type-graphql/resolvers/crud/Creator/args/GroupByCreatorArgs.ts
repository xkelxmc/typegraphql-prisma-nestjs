import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorOrderByWithAggregationInput } from "../../../inputs/CreatorOrderByWithAggregationInput";
import { CreatorScalarWhereWithAggregatesInput } from "../../../inputs/CreatorScalarWhereWithAggregatesInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";
import { CreatorScalarFieldEnum } from "../../../../enums/CreatorScalarFieldEnum";

@ArgsType()
export class GroupByCreatorArgs {
  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @Field(_type => [CreatorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByWithAggregationInput[] | undefined;

  @Field(_type => [CreatorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @Field(_type => CreatorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CreatorScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
