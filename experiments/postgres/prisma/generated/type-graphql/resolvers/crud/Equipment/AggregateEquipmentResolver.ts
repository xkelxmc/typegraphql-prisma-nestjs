import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEquipmentArgs } from "./args/AggregateEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { AggregateEquipment } from "../../outputs/AggregateEquipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class AggregateEquipmentResolver {
  @Query(_returns => AggregateEquipment, {
    nullable: false
  })
  async aggregateEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateEquipmentArgs) args: AggregateEquipmentArgs): Promise<AggregateEquipment> {
    return getPrismaFromContext(ctx).equipment.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'aggregate'),
    });
  }
}
