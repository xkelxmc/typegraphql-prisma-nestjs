import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { PostCreateManyEditorInput } from "../inputs/PostCreateManyEditorInput";

@InputType("PostCreateManyEditorInputEnvelope", {})
export class PostCreateManyEditorInputEnvelope {
  @Field(_type => [PostCreateManyEditorInput], {
    nullable: false
  })
  data!: PostCreateManyEditorInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
