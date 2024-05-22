import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@InputType("CommentListRelationFilter", {})
export class CommentListRelationFilter {
  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  every?: CommentWhereInput | undefined;

  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  some?: CommentWhereInput | undefined;

  @Field(_type => CommentWhereInput, {
    nullable: true
  })
  none?: CommentWhereInput | undefined;
}
