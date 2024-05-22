import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("MovieMovieCompoundIdCompoundUniqueInput", {})
export class MovieMovieCompoundIdCompoundUniqueInput {
  @Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  @Field(_type => String, {
    nullable: false
  })
  title!: string;
}
