import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType("PostUpsertWithoutCommentsInput", {})
export class PostUpsertWithoutCommentsInput {
  @Field(_type => PostUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCommentsInput;

  @Field(_type => PostCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommentsInput;

  @Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
