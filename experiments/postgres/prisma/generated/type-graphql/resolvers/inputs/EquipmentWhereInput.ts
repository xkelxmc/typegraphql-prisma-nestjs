import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { StringNullableFilter } from "../../../global/inputs/StringNullableFilter";

@InputType("EquipmentWhereInput", {})
export class EquipmentWhereInput {
  @Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  AND?: EquipmentWhereInput[] | undefined;

  @Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  OR?: EquipmentWhereInput[] | undefined;

  @Field(_type => [EquipmentWhereInput], {
    nullable: true
  })
  NOT?: EquipmentWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
