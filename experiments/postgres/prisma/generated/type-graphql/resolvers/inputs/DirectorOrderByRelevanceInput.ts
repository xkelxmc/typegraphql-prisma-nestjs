import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorOrderByRelevanceFieldEnum } from "../../enums/DirectorOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@InputType("DirectorOrderByRelevanceInput", {})
export class DirectorOrderByRelevanceInput {
  @Field(_type => [DirectorOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"firstName" | "lastName">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
