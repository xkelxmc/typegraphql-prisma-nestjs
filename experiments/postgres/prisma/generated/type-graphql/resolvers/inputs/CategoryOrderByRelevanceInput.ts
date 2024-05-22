import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { CategoryOrderByRelevanceFieldEnum } from "../../enums/CategoryOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("CategoryOrderByRelevanceInput", {})
export class CategoryOrderByRelevanceInput {
  @Field(_type => [CategoryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"name" | "slug">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
