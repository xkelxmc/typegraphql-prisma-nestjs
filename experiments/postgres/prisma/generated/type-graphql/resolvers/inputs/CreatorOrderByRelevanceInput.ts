import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { CreatorOrderByRelevanceFieldEnum } from "../../enums/CreatorOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("CreatorOrderByRelevanceInput", {})
export class CreatorOrderByRelevanceInput {
  @Field(_type => [CreatorOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "name"[];

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
