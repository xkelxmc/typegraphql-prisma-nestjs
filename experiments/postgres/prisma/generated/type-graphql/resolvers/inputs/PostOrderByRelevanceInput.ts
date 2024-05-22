import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { PostOrderByRelevanceFieldEnum } from "../../enums/PostOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("PostOrderByRelevanceInput", {})
export class PostOrderByRelevanceInput {
  @Field(_type => [PostOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"uuid" | "title" | "subtitle" | "content">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
