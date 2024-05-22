import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorCreateOrConnectWithoutLikesInput } from "../inputs/CreatorCreateOrConnectWithoutLikesInput";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyWithWhereWithoutLikesInput } from "../inputs/CreatorUpdateManyWithWhereWithoutLikesInput";
import { CreatorUpdateWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpdateWithWhereUniqueWithoutLikesInput";
import { CreatorUpsertWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpsertWithWhereUniqueWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@InputType("CreatorUpdateManyWithoutLikesNestedInput", {})
export class CreatorUpdateManyWithoutLikesNestedInput {
  @Field(_type => [CreatorCreateWithoutLikesInput], {
    nullable: true
  })
  create?: CreatorCreateWithoutLikesInput[] | undefined;

  @Field(_type => [CreatorCreateOrConnectWithoutLikesInput], {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput[] | undefined;

  @Field(_type => [CreatorUpsertWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  upsert?: CreatorUpsertWithWhereUniqueWithoutLikesInput[] | undefined;

  @Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  set?: CreatorWhereUniqueInput[] | undefined;

  @Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CreatorWhereUniqueInput[] | undefined;

  @Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  delete?: CreatorWhereUniqueInput[] | undefined;

  @Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput[] | undefined;

  @Field(_type => [CreatorUpdateWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  update?: CreatorUpdateWithWhereUniqueWithoutLikesInput[] | undefined;

  @Field(_type => [CreatorUpdateManyWithWhereWithoutLikesInput], {
    nullable: true
  })
  updateMany?: CreatorUpdateManyWithWhereWithoutLikesInput[] | undefined;

  @Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CreatorScalarWhereInput[] | undefined;
}
