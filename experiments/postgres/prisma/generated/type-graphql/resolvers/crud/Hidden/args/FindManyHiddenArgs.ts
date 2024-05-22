import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/HiddenOrderByWithRelationAndSearchRelevanceInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";
import { HiddenScalarFieldEnum } from "../../../../enums/HiddenScalarFieldEnum";

@ArgsType()
export class FindManyHiddenArgs {
  @Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;

  @Field(_type => [HiddenOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => HiddenWhereUniqueInput, {
    nullable: true
  })
  cursor?: HiddenWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [HiddenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
