import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { DirectorFirstNameLastNameCompoundUniqueInput } from "../inputs/DirectorFirstNameLastNameCompoundUniqueInput";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";

@InputType("DirectorWhereUniqueInput", {})
export class DirectorWhereUniqueInput {
  @Field(_type => DirectorFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  AND?: DirectorWhereInput[] | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  OR?: DirectorWhereInput[] | undefined;

  @Field(_type => [DirectorWhereInput], {
    nullable: true
  })
  NOT?: DirectorWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;
}
