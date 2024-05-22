import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateManyCreatorInputEnvelope } from "../inputs/ProblemCreateManyCreatorInputEnvelope";
import { ProblemCreateOrConnectWithoutCreatorInput } from "../inputs/ProblemCreateOrConnectWithoutCreatorInput";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemScalarWhereInput } from "../inputs/ProblemScalarWhereInput";
import { ProblemUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ProblemUpdateManyWithWhereWithoutCreatorInput";
import { ProblemUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpdateWithWhereUniqueWithoutCreatorInput";
import { ProblemUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ProblemUpsertWithWhereUniqueWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@InputType("ProblemUpdateManyWithoutCreatorNestedInput", {})
export class ProblemUpdateManyWithoutCreatorNestedInput {
  @Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

  @Field(_type => [ProblemCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput[] | undefined;

  @Field(_type => [ProblemUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @Field(_type => ProblemCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ProblemCreateManyCreatorInputEnvelope | undefined;

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

  @Field(_type => [ProblemUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: ProblemUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @Field(_type => [ProblemUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: ProblemUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @Field(_type => [ProblemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProblemScalarWhereInput[] | undefined;
}
