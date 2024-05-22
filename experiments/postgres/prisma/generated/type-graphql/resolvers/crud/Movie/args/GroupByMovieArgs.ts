import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieOrderByWithAggregationInput } from "../../../inputs/MovieOrderByWithAggregationInput";
import { MovieScalarWhereWithAggregatesInput } from "../../../inputs/MovieScalarWhereWithAggregatesInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieScalarFieldEnum } from "../../../../enums/MovieScalarFieldEnum";

@ArgsType()
export class GroupByMovieArgs {
  @Field(_type => MovieWhereInput, {
    nullable: true
  })
  where?: MovieWhereInput | undefined;

  @Field(_type => [MovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieOrderByWithAggregationInput[] | undefined;

  @Field(_type => [MovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"directorFirstName" | "directorLastName" | "title">;

  @Field(_type => MovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
