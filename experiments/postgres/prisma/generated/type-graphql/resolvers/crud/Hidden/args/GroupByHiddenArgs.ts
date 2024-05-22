import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenOrderByWithAggregationInput } from "../../../inputs/HiddenOrderByWithAggregationInput";
import { HiddenScalarWhereWithAggregatesInput } from "../../../inputs/HiddenScalarWhereWithAggregatesInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";
import { HiddenScalarFieldEnum } from "../../../../enums/HiddenScalarFieldEnum";

@ArgsType()
export class GroupByHiddenArgs {
  @Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;

  @Field(_type => [HiddenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: HiddenOrderByWithAggregationInput[] | undefined;

  @Field(_type => [HiddenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @Field(_type => HiddenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: HiddenScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
