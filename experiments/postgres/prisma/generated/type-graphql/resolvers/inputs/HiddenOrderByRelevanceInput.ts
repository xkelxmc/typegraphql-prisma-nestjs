import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { HiddenOrderByRelevanceFieldEnum } from "../../enums/HiddenOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

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
