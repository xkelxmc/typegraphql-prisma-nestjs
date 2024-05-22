import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentUpdateManyMutationInput } from "../../../inputs/CommentUpdateManyMutationInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";

@ArgsType()
export class UpdateManyCommentArgs {
  @Field(_type => CommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentUpdateManyMutationInput;

  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;
}
