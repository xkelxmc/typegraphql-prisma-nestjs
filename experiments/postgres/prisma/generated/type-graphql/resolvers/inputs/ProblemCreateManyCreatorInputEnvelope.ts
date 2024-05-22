import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemCreateManyCreatorInput } from "../inputs/ProblemCreateManyCreatorInput";

@InputType("ProblemCreateManyCreatorInputEnvelope", {})
export class ProblemCreateManyCreatorInputEnvelope {
  @Field(_type => [ProblemCreateManyCreatorInput], {
    nullable: false
  })
  data!: ProblemCreateManyCreatorInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
