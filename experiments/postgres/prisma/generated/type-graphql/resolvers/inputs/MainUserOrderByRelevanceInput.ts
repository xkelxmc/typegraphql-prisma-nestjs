import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserOrderByRelevanceFieldEnum } from "../../enums/MainUserOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@InputType("MainUserOrderByRelevanceInput", {})
export class MainUserOrderByRelevanceInput {
  @Field(_type => [MainUserOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"email" | "name" | "aliases">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
