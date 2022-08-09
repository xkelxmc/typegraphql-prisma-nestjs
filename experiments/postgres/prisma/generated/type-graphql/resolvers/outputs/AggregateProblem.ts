import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemAvgAggregate } from "../outputs/ProblemAvgAggregate";
import { ProblemCountAggregate } from "../outputs/ProblemCountAggregate";
import { ProblemMaxAggregate } from "../outputs/ProblemMaxAggregate";
import { ProblemMinAggregate } from "../outputs/ProblemMinAggregate";
import { ProblemSumAggregate } from "../outputs/ProblemSumAggregate";

@TypeGraphQL.ObjectType("AggregateProblem", {
  isAbstract: true
})
export class AggregateProblem {
  @TypeGraphQL.Field(_type => ProblemCountAggregate, {
    nullable: true
  })
  count!: ProblemCountAggregate | null;

  @TypeGraphQL.Field(_type => ProblemAvgAggregate, {
    nullable: true
  })
  avg!: ProblemAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProblemSumAggregate, {
    nullable: true
  })
  sum!: ProblemSumAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMinAggregate, {
    nullable: true
  })
  min!: ProblemMinAggregate | null;

  @TypeGraphQL.Field(_type => ProblemMaxAggregate, {
    nullable: true
  })
  max!: ProblemMaxAggregate | null;
}