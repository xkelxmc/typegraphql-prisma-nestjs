import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";

@ArgsType()
export class DeleteManyCommentArgs {
  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;
}
