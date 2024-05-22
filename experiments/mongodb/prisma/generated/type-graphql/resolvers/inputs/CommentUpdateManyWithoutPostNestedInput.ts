import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutPostInput } from "../inputs/CommentUpdateManyWithWhereWithoutPostInput";
import { CommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostInput";
import { CommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@InputType("CommentUpdateManyWithoutPostNestedInput", {})
export class CommentUpdateManyWithoutPostNestedInput {
  @Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @Field(_type => [CommentCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;

  @Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @Field(_type => CommentCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyPostInputEnvelope | undefined;

  @Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @Field(_type => [CommentUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[] | undefined;

  @Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
