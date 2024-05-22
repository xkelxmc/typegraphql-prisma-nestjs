import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("MovieScalarWhereWithAggregatesInput", {})
export class MovieScalarWhereWithAggregatesInput {
  @Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [MovieScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  directorFirstName?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  directorLastName?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;
}
