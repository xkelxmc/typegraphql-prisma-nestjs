import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserWhereInput } from "../inputs/MainUserWhereInput";

@InputType("UserNullableRelationFilter", {})
export class UserNullableRelationFilter {
  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  is?: MainUserWhereInput | undefined;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  isNot?: MainUserWhereInput | undefined;
}
