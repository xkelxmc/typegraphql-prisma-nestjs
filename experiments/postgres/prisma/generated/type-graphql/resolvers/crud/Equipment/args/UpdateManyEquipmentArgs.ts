import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentUpdateManyMutationInput } from "../../../inputs/EquipmentUpdateManyMutationInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";

@ArgsType()
export class UpdateManyEquipmentArgs {
  @Field(_type => EquipmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: EquipmentUpdateManyMutationInput;

  @Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;
}
