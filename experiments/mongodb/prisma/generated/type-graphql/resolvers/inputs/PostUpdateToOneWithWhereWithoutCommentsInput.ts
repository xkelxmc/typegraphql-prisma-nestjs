import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@InputType("PostUpdateToOneWithWhereWithoutCommentsInput", {})
export class PostUpdateToOneWithWhereWithoutCommentsInput {
  @Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;

  @Field(_type => PostUpdateWithoutCommentsInput, {
    nullable: false
  })
  data!: PostUpdateWithoutCommentsInput;
}
