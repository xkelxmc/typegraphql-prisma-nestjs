import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EquipmentOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EquipmentOrderByWithRelationAndSearchRelevanceInput";
import { EquipmentWhereInput } from "../../../inputs/EquipmentWhereInput";
import { EquipmentWhereUniqueInput } from "../../../inputs/EquipmentWhereUniqueInput";

@ArgsType()
export class AggregateEquipmentArgs {
  @Field(_type => EquipmentWhereInput, {
    nullable: true
  })
  where?: EquipmentWhereInput | undefined;

  @Field(_type => [EquipmentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: EquipmentOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => EquipmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: EquipmentWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
