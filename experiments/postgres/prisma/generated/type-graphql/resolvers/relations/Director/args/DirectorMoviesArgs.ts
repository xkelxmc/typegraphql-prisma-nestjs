import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum";

@ArgsType()
export class DirectorMoviesArgs {
  @Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @Field(_type => [MovieOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [MovieScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"directorFirstName" | "directorLastName" | "title"> | undefined;
}
