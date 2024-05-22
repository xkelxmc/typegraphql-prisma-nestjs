import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemWhereInput } from "../inputs/ProblemWhereInput";

@InputType("ProblemListRelationFilter", {})
export class ProblemListRelationFilter {
  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  every?: ProblemWhereInput | undefined;

  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  some?: ProblemWhereInput | undefined;

  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  none?: ProblemWhereInput | undefined;
}
