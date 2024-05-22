import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieWhereInput } from "../inputs/MovieWhereInput";

@InputType("MovieListRelationFilter", {})
export class MovieListRelationFilter {
  @Field(_type => MovieWhereInput, {
    nullable: true
  })
  every?: MovieWhereInput | undefined;

  @Field(_type => MovieWhereInput, {
    nullable: true
  })
  some?: MovieWhereInput | undefined;

  @Field(_type => MovieWhereInput, {
    nullable: true
  })
  none?: MovieWhereInput | undefined;
}
