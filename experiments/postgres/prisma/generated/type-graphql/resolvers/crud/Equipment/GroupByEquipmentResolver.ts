import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEquipmentArgs } from "./args/GroupByEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { EquipmentGroupBy } from "../../outputs/EquipmentGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class GroupByEquipmentResolver {
  @Query(_returns => [EquipmentGroupBy], {
    nullable: false
  })
  async groupByEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByEquipmentArgs) args: GroupByEquipmentArgs): Promise<EquipmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'groupBy');
    return getPrismaFromContext(ctx).equipment.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
