import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEquipmentArgs } from "./args/FindManyEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class FindManyEquipmentResolver {
  @Query(_returns => [Equipment], {
    nullable: false
  })
  async equipments(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyEquipmentArgs) args: FindManyEquipmentArgs): Promise<Equipment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findMany');
    return getPrismaFromContext(ctx).equipment.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findMany')),
    });
  }
}
