import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { PatientOrderByRelevanceFieldEnum } from "../../enums/PatientOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PatientOrderByRelevanceInput", {})
export class PatientOrderByRelevanceInput {
  @Field(_type => [PatientOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"firstName" | "lastName" | "email">;

  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => String, {
    nullable: false
  })
  search!: string;
}
