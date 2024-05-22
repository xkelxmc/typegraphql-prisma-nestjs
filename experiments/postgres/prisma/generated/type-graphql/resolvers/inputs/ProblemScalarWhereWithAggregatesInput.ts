import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntNullableWithAggregatesFilter } from "../../../global/inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../../../global/inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../../../global/inputs/StringWithAggregatesFilter";

@InputType("ProblemScalarWhereWithAggregatesInput", {})
export class ProblemScalarWhereWithAggregatesInput {
  @Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ProblemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProblemScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  problemText?: StringWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  creatorId?: IntNullableWithAggregatesFilter | undefined;
}
