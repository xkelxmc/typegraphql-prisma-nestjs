import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInput } from "../inputs/CommentCreateManyPostInput";

@InputType("CommentCreateManyPostInputEnvelope", {})
export class CommentCreateManyPostInputEnvelope {
  @Field(_type => [CommentCreateManyPostInput], {
    nullable: false
  })
  data!: CommentCreateManyPostInput[];
}
