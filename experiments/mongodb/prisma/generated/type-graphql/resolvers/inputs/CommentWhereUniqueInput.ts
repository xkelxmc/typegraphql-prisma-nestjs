import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";

@InputType("CommentWhereUniqueInput", {})
export class CommentWhereUniqueInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => [CommentWhereInput], {
    nullable: true
  })
  AND?: CommentWhereInput[] | undefined;

  @Field(_type => [CommentWhereInput], {
    nullable: true
  })
  OR?: CommentWhereInput[] | undefined;

  @Field(_type => [CommentWhereInput], {
    nullable: true
  })
  NOT?: CommentWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  postId?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  comment?: StringFilter | undefined;

  @Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
