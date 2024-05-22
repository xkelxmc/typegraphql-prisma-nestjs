import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { HiddenOrderByRelevanceInput } from "../inputs/HiddenOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("HiddenOrderByWithRelationAndSearchRelevanceInput", {})
export class HiddenOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @Field(_type => HiddenOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: HiddenOrderByRelevanceInput | undefined;
}
