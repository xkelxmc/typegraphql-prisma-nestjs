import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateInput } from "../../../inputs/EquipmentCreateInput";

@ArgsType()
export class CreateOneEquipmentArgs {
  @Field(_type => EquipmentCreateInput, {
    nullable: true
  })
  data?: EquipmentCreateInput | undefined;
}
