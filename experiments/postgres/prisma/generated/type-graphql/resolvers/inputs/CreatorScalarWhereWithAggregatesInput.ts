import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntWithAggregatesFilter } from "../../../global/inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("CreatorScalarWhereWithAggregatesInput", {})
export class CreatorScalarWhereWithAggregatesInput {
  @Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [CreatorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CreatorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
