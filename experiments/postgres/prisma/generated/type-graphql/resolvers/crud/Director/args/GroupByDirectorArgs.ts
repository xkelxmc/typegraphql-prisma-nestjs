import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorOrderByWithAggregationInput } from "../../../inputs/DirectorOrderByWithAggregationInput";
import { DirectorScalarWhereWithAggregatesInput } from "../../../inputs/DirectorScalarWhereWithAggregatesInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorScalarFieldEnum } from "../../../../enums/DirectorScalarFieldEnum";

@ArgsType()
export class GroupByDirectorArgs {
  @Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @Field(_type => [DirectorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DirectorOrderByWithAggregationInput[] | undefined;

  @Field(_type => [DirectorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"firstName" | "lastName">;

  @Field(_type => DirectorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DirectorScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
