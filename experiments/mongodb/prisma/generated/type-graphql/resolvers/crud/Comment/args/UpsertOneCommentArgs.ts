import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentCreateInput } from "../../../inputs/CommentCreateInput";
import { CommentUpdateInput } from "../../../inputs/CommentUpdateInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";

@ArgsType()
export class UpsertOneCommentArgs {
  @Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @Field(_type => CommentCreateInput, {
    nullable: false
  })
  create!: CommentCreateInput;

  @Field(_type => CommentUpdateInput, {
    nullable: false
  })
  update!: CommentUpdateInput;
}
