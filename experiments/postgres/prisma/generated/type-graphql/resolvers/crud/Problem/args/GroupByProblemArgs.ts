import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemOrderByWithAggregationInput } from "../../../inputs/ProblemOrderByWithAggregationInput";
import { ProblemScalarWhereWithAggregatesInput } from "../../../inputs/ProblemScalarWhereWithAggregatesInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";
import { ProblemScalarFieldEnum } from "../../../../enums/ProblemScalarFieldEnum";

@ArgsType()
export class GroupByProblemArgs {
  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;

  @Field(_type => [ProblemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProblemOrderByWithAggregationInput[] | undefined;

  @Field(_type => [ProblemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "problemText" | "creatorId">;

  @Field(_type => ProblemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProblemScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
