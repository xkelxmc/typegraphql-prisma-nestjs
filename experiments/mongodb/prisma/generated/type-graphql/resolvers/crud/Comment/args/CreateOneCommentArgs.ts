import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentCreateInput } from "../../../inputs/CommentCreateInput";

@ArgsType()
export class CreateOneCommentArgs {
  @Field(_type => CommentCreateInput, {
    nullable: false
  })
  data!: CommentCreateInput;
}
