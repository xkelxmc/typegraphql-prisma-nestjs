import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorUpdateWithoutMoviesInput } from "../inputs/DirectorUpdateWithoutMoviesInput";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@InputType("DirectorUpdateToOneWithWhereWithoutMoviesInput", {})
export class DirectorUpdateToOneWithWhereWithoutMoviesInput {
  @Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @Field(_type => DirectorUpdateWithoutMoviesInput, {
    nullable: false
  })
  data!: DirectorUpdateWithoutMoviesInput;
}
