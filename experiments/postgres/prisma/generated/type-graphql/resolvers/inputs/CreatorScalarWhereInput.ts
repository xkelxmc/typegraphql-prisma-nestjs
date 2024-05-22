import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";

@InputType("CreatorScalarWhereInput", {})
export class CreatorScalarWhereInput {
  @Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  AND?: CreatorScalarWhereInput[] | undefined;

  @Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  OR?: CreatorScalarWhereInput[] | undefined;

  @Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  NOT?: CreatorScalarWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
