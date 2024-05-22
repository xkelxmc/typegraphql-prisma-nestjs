import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("PostMaxAggregate", {})
export class PostMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  slug!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  body!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  authorId!: string | null;
}
