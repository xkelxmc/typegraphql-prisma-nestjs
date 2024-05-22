import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserAvgOrderByAggregateInput } from "../inputs/MainUserAvgOrderByAggregateInput";
import { MainUserCountOrderByAggregateInput } from "../inputs/MainUserCountOrderByAggregateInput";
import { MainUserMaxOrderByAggregateInput } from "../inputs/MainUserMaxOrderByAggregateInput";
import { MainUserMinOrderByAggregateInput } from "../inputs/MainUserMinOrderByAggregateInput";
import { MainUserSumOrderByAggregateInput } from "../inputs/MainUserSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";

@InputType("MainUserOrderByWithAggregationInput", {})
export class MainUserOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  name?: SortOrderInput | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  age?: "asc" | "desc" | undefined;

  balance?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  grades?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  aliases?: "asc" | "desc" | undefined;

  @Field(_type => MainUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MainUserCountOrderByAggregateInput | undefined;

  @Field(_type => MainUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MainUserAvgOrderByAggregateInput | undefined;

  @Field(_type => MainUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MainUserMaxOrderByAggregateInput | undefined;

  @Field(_type => MainUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MainUserMinOrderByAggregateInput | undefined;

  @Field(_type => MainUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MainUserSumOrderByAggregateInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  get firstName() {
    return this.name;
  }

  set firstName(name: SortOrderInput | undefined) {
    this.name = name;
  }

  @Field(_type => SortOrder, {
    nullable: true
  })
  get accountBalance() {
    return this.balance;
  }

  set accountBalance(balance: "asc" | "desc" | undefined) {
    this.balance = balance;
  }
}
