import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { SortOrder } from "../../../global/enums/SortOrder";
import { MovieOrderByRelevanceFieldEnum } from "../../enums/MovieOrderByRelevanceFieldEnum";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("MovieOrderByRelevanceInput", {})
export class MovieOrderByRelevanceInput {
  @Field(_type => [MovieOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"directorFirstName" | "directorLastName" | "title">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
