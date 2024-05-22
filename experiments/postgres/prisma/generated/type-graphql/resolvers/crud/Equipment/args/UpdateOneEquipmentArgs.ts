import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentUpdateInput } from "../../../inputs/EquipmentUpdateInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@ArgsType()
export class UpdateOneEquipmentArgs {
  @Field(_type => EquipmentUpdateInput, {
    nullable: false
  })
  data!: EquipmentUpdateInput;

  @Field(_type => EquipmentWhereUniqueInput, {
    nullable: false
  })
  where!: EquipmentWhereUniqueInput;
}
