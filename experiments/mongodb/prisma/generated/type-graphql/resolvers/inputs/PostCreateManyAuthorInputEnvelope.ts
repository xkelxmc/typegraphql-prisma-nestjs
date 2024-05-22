import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyAuthorInput } from "../inputs/PostCreateManyAuthorInput";

@InputType("PostCreateManyAuthorInputEnvelope", {})
export class PostCreateManyAuthorInputEnvelope {
  @Field(_type => [PostCreateManyAuthorInput], {
    nullable: false
  })
  data!: PostCreateManyAuthorInput[];
}
