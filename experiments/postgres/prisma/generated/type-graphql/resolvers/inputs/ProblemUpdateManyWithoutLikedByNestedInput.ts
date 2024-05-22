import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateOrConnectWithoutLikedByInput } from "../inputs/ProblemCreateOrConnectWithoutLikedByInput";
import { ProblemCreateWithoutLikedByInput } from "../inputs/ProblemCreateWithoutLikedByInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutLikedByInput } from "../inputs/ProblemUpdateManyWithWhereWithoutLikedByInput";
import { ProblemUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutLikedByInput";
import { ProblemUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutLikedByInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@InputType("ProblemUpdateManyWithoutLikedByNestedInput", {})
export class ProblemUpdateManyWithoutLikedByNestedInput {
  @Field(_type => [ProblemCreateWithoutLikedByInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutLikedByInput[] | undefined;

  @Field(_type => [ProblemCreateOrConnectWithoutLikedByInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput[] | undefined;

  @Field(_type => [ProblemUpsertWithWhereUniqueWithoutLikedByInput], {
    nullable: true
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;

  @Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  set?: ProblemWhereUniqueInput[] | undefined;

  @Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProblemWhereUniqueInput[] | undefined;

  @Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  delete?: ProblemWhereUniqueInput[] | undefined;

  @Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;

  @Field(_type => [ProblemUpdateWithWhereUniqueWithoutLikedByInput], {
    nullable: true
  })
  update?: ProblemUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;

  @Field(_type => [ProblemUpdateManyWithWhereWithoutLikedByInput], {
    nullable: true
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutLikedByInput[] | undefined;

  @Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;
}
