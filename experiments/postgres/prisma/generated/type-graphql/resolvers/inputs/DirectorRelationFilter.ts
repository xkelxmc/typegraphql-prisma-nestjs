import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@InputType("DirectorRelationFilter", {})
export class DirectorRelationFilter {
  @Field(_type => DirectorWhereInput, {
    nullable: true
  })
  is?: DirectorWhereInput | undefined;

  @Field(_type => DirectorWhereInput, {
    nullable: true
  })
  isNot?: DirectorWhereInput | undefined;
}
