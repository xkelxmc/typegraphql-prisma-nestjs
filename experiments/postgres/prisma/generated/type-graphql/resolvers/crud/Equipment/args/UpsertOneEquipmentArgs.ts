import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateInput } from "../../../inputs/EquipmentCreateInput";
import { EquipmentUpdateInput } from "../../../inputs/EquipmentUpdateInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@ArgsType()
export class UpsertOneEquipmentArgs {
  @Field(_type => EquipmentWhereUniqueInput, {
    nullable: false
  })
  where!: EquipmentWhereUniqueInput;

  @Field(_type => EquipmentCreateInput, {
    nullable: false
  })
  create!: EquipmentCreateInput;

  @Field(_type => EquipmentUpdateInput, {
    nullable: false
  })
  update!: EquipmentUpdateInput;
}
