import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorUpdateOneRequiredWithoutMoviesNestedInput } from "../inputs/DirectorUpdateOneRequiredWithoutMoviesNestedInput";

@InputType("MovieUpdateInput", {})
export class MovieUpdateInput {
  @Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @Field(_type => DirectorUpdateOneRequiredWithoutMoviesNestedInput, {
    nullable: true
  })
  director?: DirectorUpdateOneRequiredWithoutMoviesNestedInput | undefined;
}
