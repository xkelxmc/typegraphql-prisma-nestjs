import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentUpdateInput } from "../../../inputs/CommentUpdateInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";

@ArgsType()
export class UpdateOneCommentArgs {
  @Field(_type => CommentUpdateInput, {
    nullable: false
  })
  data!: CommentUpdateInput;

  @Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;
}
