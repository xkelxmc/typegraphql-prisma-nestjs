import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEquipmentArgs } from "./args/UpsertOneEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class UpsertOneEquipmentResolver {
  @Mutation(_returns => Equipment, {
    nullable: false
  })
  async upsertOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneEquipmentArgs) args: UpsertOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'upsert');
    return getPrismaFromContext(ctx).equipment.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'upsert')),
    });
  }
}
