import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutPostInput } from "../inputs/CommentUpdateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@InputType("CommentUpdateWithWhereUniqueWithoutPostInput", {})
export class CommentUpdateWithWhereUniqueWithoutPostInput {
  @Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @Field(_type => CommentUpdateWithoutPostInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutPostInput;
}
