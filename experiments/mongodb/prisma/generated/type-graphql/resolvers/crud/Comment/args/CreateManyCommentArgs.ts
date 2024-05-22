import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentCreateManyInput } from "../../../inputs/CommentCreateManyInput";

@ArgsType()
export class CreateManyCommentArgs {
  @Field(_type => [CommentCreateManyInput], {
    nullable: false
  })
  data!: CommentCreateManyInput[];
}
