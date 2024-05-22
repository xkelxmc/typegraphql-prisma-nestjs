import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserOrderByWithAggregationInput } from "../../../inputs/MainUserOrderByWithAggregationInput";
import { MainUserScalarWhereWithAggregatesInput } from "../../../inputs/MainUserScalarWhereWithAggregatesInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";
import { MainUserScalarFieldEnum } from "../../../../enums/MainUserScalarFieldEnum";

@ArgsType()
export class GroupByMainUserArgs {
  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @Field(_type => [MainUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MainUserOrderByWithAggregationInput[] | undefined;

  @Field(_type => [MainUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "name" | "age" | "balance" | "amount" | "role" | "grades" | "aliases">;

  @Field(_type => MainUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MainUserScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
