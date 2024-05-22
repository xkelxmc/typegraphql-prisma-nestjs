import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@InputType("PostUpdateManyMutationInput", {})
export class PostUpdateManyMutationInput {
  @Field(_type => String, {
    nullable: true
  })
  slug?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  body?: string | undefined;
}
