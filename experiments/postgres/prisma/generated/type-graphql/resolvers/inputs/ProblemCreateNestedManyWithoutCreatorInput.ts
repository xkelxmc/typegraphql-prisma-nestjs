import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateManyCreatorInputEnvelope } from "../inputs/ProblemCreateManyCreatorInputEnvelope";
import { ProblemCreateOrConnectWithoutCreatorInput } from "../inputs/ProblemCreateOrConnectWithoutCreatorInput";
import { ProblemCreateWithoutCreatorInput } from "../inputs/ProblemCreateWithoutCreatorInput";
import { ProblemWhereUniqueInput } from "../inputs/ProblemWhereUniqueInput";

@InputType("ProblemCreateNestedManyWithoutCreatorInput", {})
export class ProblemCreateNestedManyWithoutCreatorInput {
  @Field(_type => [ProblemCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: ProblemCreateWithoutCreatorInput[] | undefined;

  @Field(_type => [ProblemCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput[] | undefined;

  @Field(_type => ProblemCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: ProblemCreateManyCreatorInputEnvelope | undefined;

  @Field(_type => [ProblemWhereUniqueInput], {
    nullable: true
  })
  connect?: ProblemWhereUniqueInput[] | undefined;
}
