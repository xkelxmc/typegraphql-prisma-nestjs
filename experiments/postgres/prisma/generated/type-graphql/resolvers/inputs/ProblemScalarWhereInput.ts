import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { IntNullableFilter } from "../../../global/inputs/IntNullableFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";

@InputType("ProblemScalarWhereInput", {})
export class ProblemScalarWhereInput {
  @Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  AND?: ProblemScalarWhereInput[] | undefined;

  @Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  OR?: ProblemScalarWhereInput[] | undefined;

  @Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  NOT?: ProblemScalarWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  problemText?: StringFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  creatorId?: IntNullableFilter | undefined;
}
