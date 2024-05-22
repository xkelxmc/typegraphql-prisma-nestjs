import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("NativeTypeModelOrderByWithRelationAndSearchRelevanceInput", {})
export class NativeTypeModelOrderByWithRelationAndSearchRelevanceInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  bigInt?: SortOrderInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  byteA?: SortOrderInput | undefined;

  @Field(_type => SortOrderInput, {
    nullable: true
  })
  decimal?: SortOrderInput | undefined;
}
