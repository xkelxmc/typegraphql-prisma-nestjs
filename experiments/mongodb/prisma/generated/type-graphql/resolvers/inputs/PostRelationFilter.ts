import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType("PostRelationFilter", {})
export class PostRelationFilter {
  @Field(_type => PostWhereInput, {
    nullable: true
  })
  is?: PostWhereInput | undefined;

  @Field(_type => PostWhereInput, {
    nullable: true
  })
  isNot?: PostWhereInput | undefined;
}
