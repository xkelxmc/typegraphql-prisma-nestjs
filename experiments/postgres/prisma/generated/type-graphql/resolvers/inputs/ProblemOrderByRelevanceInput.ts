import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { ProblemOrderByRelevanceFieldEnum } from "../../enums/ProblemOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@InputType("ProblemOrderByRelevanceInput", {})
export class ProblemOrderByRelevanceInput {
  @Field(_type => [ProblemOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "problemText"[];

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
