import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CategoryOrderByWithRelationAndSearchRelevanceInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
import { CategoryScalarFieldEnum } from "../../../../enums/CategoryScalarFieldEnum";

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
  @Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @Field(_type => [CategoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoryWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [CategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"name" | "slug" | "number"> | undefined;
}
