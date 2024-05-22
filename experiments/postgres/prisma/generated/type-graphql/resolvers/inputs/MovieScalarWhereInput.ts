import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";

@InputType("MovieScalarWhereInput", {})
export class MovieScalarWhereInput {
  @Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  AND?: MovieScalarWhereInput[] | undefined;

  @Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  OR?: MovieScalarWhereInput[] | undefined;

  @Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  directorFirstName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  directorLastName?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;
}
