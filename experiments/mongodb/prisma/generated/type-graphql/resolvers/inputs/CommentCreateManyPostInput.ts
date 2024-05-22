import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@InputType("CommentCreateManyPostInput", {})
export class CommentCreateManyPostInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  comment!: string;
}
