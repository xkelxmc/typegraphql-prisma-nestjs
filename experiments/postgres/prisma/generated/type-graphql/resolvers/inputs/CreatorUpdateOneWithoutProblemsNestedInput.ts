import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorCreateOrConnectWithoutProblemsInput } from "../inputs/CreatorCreateOrConnectWithoutProblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateToOneWithWhereWithoutProblemsInput } from "../inputs/CreatorUpdateToOneWithWhereWithoutProblemsInput";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@InputType("CreatorUpdateOneWithoutProblemsNestedInput", {})
export class CreatorUpdateOneWithoutProblemsNestedInput {
  @Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @Field(_type => CreatorCreateOrConnectWithoutProblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput | undefined;

  @Field(_type => CreatorUpsertWithoutProblemsInput, {
    nullable: true
  })
  upsert?: CreatorUpsertWithoutProblemsInput | undefined;

  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  disconnect?: CreatorWhereInput | undefined;

  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  delete?: CreatorWhereInput | undefined;

  @Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @Field(_type => CreatorUpdateToOneWithWhereWithoutProblemsInput, {
    nullable: true
  })
  update?: CreatorUpdateToOneWithWhereWithoutProblemsInput | undefined;
}
