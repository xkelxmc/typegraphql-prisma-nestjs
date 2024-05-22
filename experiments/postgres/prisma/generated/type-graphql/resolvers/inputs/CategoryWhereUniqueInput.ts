import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { IntFilter } from "../../../global/inputs/IntFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { CategoryCategoryCompoundUniqueCompoundUniqueInput } from "../inputs/CategoryCategoryCompoundUniqueCompoundUniqueInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@InputType("CategoryWhereUniqueInput", {})
export class CategoryWhereUniqueInput {
  @Field(_type => CategoryCategoryCompoundUniqueCompoundUniqueInput, {
    nullable: true
  })
  categoryCompoundUnique?: CategoryCategoryCompoundUniqueCompoundUniqueInput | undefined;

  @Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  AND?: CategoryWhereInput[] | undefined;

  @Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  OR?: CategoryWhereInput[] | undefined;

  @Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  NOT?: CategoryWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  number?: IntFilter | undefined;
}
