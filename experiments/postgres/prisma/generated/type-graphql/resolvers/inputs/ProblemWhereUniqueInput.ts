import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntNullableFilter } from "../../../global/inputs/IntNullableFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { CreatorListRelationFilter } from "../inputs/CreatorListRelationFilter";
import { CreatorNullableRelationFilter } from "../inputs/CreatorNullableRelationFilter";
import { ProblemWhereInput } from "../inputs/ProblemWhereInput";

@InputType("ProblemWhereUniqueInput", {})
export class ProblemWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  AND?: ProblemWhereInput[] | undefined;

  @Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  OR?: ProblemWhereInput[] | undefined;

  @Field(_type => [ProblemWhereInput], {
    nullable: true
  })
  NOT?: ProblemWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;

  @Field(_type => CreatorListRelationFilter, {
    nullable: true
  })
  likedBy?: CreatorListRelationFilter | undefined;

  @Field(_type => CreatorNullableRelationFilter, {
    nullable: true
  })
  creator?: CreatorNullableRelationFilter | undefined;
}
