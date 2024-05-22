import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../../global/scalars";
import { Creator } from "../models/Creator";
import { ProblemCount } from "../resolvers/outputs/ProblemCount";

@ObjectType("Problem", {})
export class Problem {
  @Field(_type => ID, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  likedBy?: Creator[];

  creator?: Creator | null;

  @Field(_type => Int, {
    nullable: true
  })
  creatorId?: number | null;

  @Field(_type => ProblemCount, {
    nullable: true
  })
  _count?: ProblemCount | null;
}
