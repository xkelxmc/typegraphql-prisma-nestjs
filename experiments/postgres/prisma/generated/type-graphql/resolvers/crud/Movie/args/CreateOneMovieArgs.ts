import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCreateInput } from "../../../inputs/MovieCreateInput";

@ArgsType()
export class CreateOneMovieArgs {
  @Field(_type => MovieCreateInput, {
    nullable: false
  })
  data!: MovieCreateInput;
}
