import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieCreateNestedManyWithoutDirectorInput } from "../inputs/MovieCreateNestedManyWithoutDirectorInput";

@InputType("DirectorCreateInput", {})
export class DirectorCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @Field(_type => MovieCreateNestedManyWithoutDirectorInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutDirectorInput | undefined;
}
