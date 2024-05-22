import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByWithAggregationInput } from "../../../inputs/NativeTypeModelOrderByWithAggregationInput";
import { NativeTypeModelScalarWhereWithAggregatesInput } from "../../../inputs/NativeTypeModelScalarWhereWithAggregatesInput";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";
import { NativeTypeModelScalarFieldEnum } from "../../../../enums/NativeTypeModelScalarFieldEnum";

@ArgsType()
export class GroupByNativeTypeModelArgs {
  @Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @Field(_type => [NativeTypeModelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByWithAggregationInput[] | undefined;

  @Field(_type => [NativeTypeModelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "bigInt" | "byteA" | "decimal">;

  @Field(_type => NativeTypeModelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NativeTypeModelScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
