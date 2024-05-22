import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentCreateManyInput } from "../../../inputs/EquipmentCreateManyInput";

@ArgsType()
export class CreateManyEquipmentArgs {
  @Field(_type => [EquipmentCreateManyInput], {
    nullable: false
  })
  data!: EquipmentCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
