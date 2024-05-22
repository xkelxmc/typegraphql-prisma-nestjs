import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";
import { ProblemListRelationFilter } from "../inputs/ProblemListRelationFilter";

@InputType("CreatorWhereUniqueInput", {})
export class CreatorWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

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
