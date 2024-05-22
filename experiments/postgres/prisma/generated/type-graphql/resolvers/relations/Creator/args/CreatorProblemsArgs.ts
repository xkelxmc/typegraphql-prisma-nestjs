import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProblemOrderByWithRelationAndSearchRelevanceInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";
import { ProblemScalarFieldEnum } from "../../../../enums/ProblemScalarFieldEnum";

@ArgsType()
export class CreatorProblemsArgs {
  @Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;

  @Field(_type => [ProblemOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => ProblemWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProblemWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [ProblemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "problemText" | "creatorId"> | undefined;
}
