import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemAvgAggregate } from "../outputs/ProblemAvgAggregate";
import { ProblemCountAggregate } from "../outputs/ProblemCountAggregate";
import { ProblemMaxAggregate } from "../outputs/ProblemMaxAggregate";
import { ProblemMinAggregate } from "../outputs/ProblemMinAggregate";
import { ProblemSumAggregate } from "../outputs/ProblemSumAggregate";

@ObjectType("ProblemGroupBy", {})
export class ProblemGroupBy {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @Field(_type => Int, {
    nullable: true
  })
  creatorId!: number | null;

  @Field(_type => ProblemCountAggregate, {
    nullable: true
  })
  _count!: ProblemCountAggregate | null;

  @Field(_type => ProblemAvgAggregate, {
    nullable: true
  })
  _avg!: ProblemAvgAggregate | null;

  @Field(_type => ProblemSumAggregate, {
    nullable: true
  })
  _sum!: ProblemSumAggregate | null;

  @Field(_type => ProblemMinAggregate, {
    nullable: true
  })
  _min!: ProblemMinAggregate | null;

  @Field(_type => ProblemMaxAggregate, {
    nullable: true
  })
  _max!: ProblemMaxAggregate | null;
}
