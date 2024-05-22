import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentOrderByWithRelationInput } from "../../../inputs/CommentOrderByWithRelationInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";
import { CommentScalarFieldEnum } from "../../../../enums/CommentScalarFieldEnum";

@ArgsType()
export class FindManyCommentArgs {
  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @Field(_type => [CommentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CommentOrderByWithRelationInput[] | undefined;

  @Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommentWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [CommentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "postId" | "comment"> | undefined;
}
