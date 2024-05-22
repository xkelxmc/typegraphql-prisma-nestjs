import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@InputType("CommentCreateNestedManyWithoutPostInput", {})
export class CommentCreateNestedManyWithoutPostInput {
  @Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @Field(_type => [CommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;

  @Field(_type => CommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyPostInputEnvelope | undefined;

  @Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
