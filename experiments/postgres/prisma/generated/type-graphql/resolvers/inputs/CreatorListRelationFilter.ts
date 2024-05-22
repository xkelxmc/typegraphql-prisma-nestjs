import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@InputType("CreatorListRelationFilter", {})
export class CreatorListRelationFilter {
  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  every?: CreatorWhereInput | undefined;

  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  some?: CreatorWhereInput | undefined;

  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  none?: CreatorWhereInput | undefined;
}
