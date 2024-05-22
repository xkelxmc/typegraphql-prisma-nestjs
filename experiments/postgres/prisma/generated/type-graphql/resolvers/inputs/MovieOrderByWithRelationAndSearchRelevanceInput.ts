import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorOrderByWithRelationAndSearchRelevanceInput } from "../inputs/DirectorOrderByWithRelationAndSearchRelevanceInput";
import { MovieOrderByRelevanceInput } from "../inputs/MovieOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("MovieOrderByWithRelationAndSearchRelevanceInput", {})
export class MovieOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  directorFirstName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  directorLastName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @Field(_type => DirectorOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  director?: DirectorOrderByWithRelationAndSearchRelevanceInput | undefined;

  @Field(_type => MovieOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MovieOrderByRelevanceInput | undefined;
}
