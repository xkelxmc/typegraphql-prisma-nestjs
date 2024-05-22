import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";

@InputType("PostScalarWhereInput", {})
export class PostScalarWhereInput {
  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  AND?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  OR?: PostScalarWhereInput[] | undefined;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  NOT?: PostScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  body?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;
}
