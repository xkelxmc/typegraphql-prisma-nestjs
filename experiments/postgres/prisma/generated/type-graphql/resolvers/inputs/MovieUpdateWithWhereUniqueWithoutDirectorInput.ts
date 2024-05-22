import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieUpdateWithoutDirectorInput } from "../inputs/MovieUpdateWithoutDirectorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@InputType("MovieUpdateWithWhereUniqueWithoutDirectorInput", {})
export class MovieUpdateWithWhereUniqueWithoutDirectorInput {
  @Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @Field(_type => MovieUpdateWithoutDirectorInput, {
    nullable: false
  })
  data!: MovieUpdateWithoutDirectorInput;
}
