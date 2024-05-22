import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { ProblemListRelationFilter } from "../inputs/ProblemListRelationFilter";

@InputType("CreatorWhereInput", {})
export class CreatorWhereInput {
  @Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  AND?: CreatorWhereInput[] | undefined;

  @Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  OR?: CreatorWhereInput[] | undefined;

  @Field(_type => [CreatorWhereInput], {
    nullable: true
  })
  NOT?: CreatorWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  likes?: ProblemListRelationFilter | undefined;

  @Field(_type => ProblemListRelationFilter, {
    nullable: true
  })
  problems?: ProblemListRelationFilter | undefined;
}
