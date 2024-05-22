import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { HiddenOrderByRelevanceFieldEnum } from "../../enums/HiddenOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@InputType("HiddenOrderByRelevanceInput", {})
export class HiddenOrderByRelevanceInput {
  @Field(_type => [HiddenOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"id" | "name">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
