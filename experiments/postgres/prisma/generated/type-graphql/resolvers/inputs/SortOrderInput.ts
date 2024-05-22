import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { NullsOrder } from "../../../global/enums/NullsOrder";
import { SortOrder } from "../../../global/enums/SortOrder";
import { DecimalJSScalar } from "../../../global/scalars";

@InputType("SortOrderInput", {})
export class SortOrderInput {
  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => NullsOrder, {
    nullable: true
  })
  nulls?: "first" | "last" | undefined;
}
