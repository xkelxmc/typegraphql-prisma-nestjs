import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("DirectorScalarWhereWithAggregatesInput", {})
export class DirectorScalarWhereWithAggregatesInput {
  @Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [DirectorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DirectorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;
}
