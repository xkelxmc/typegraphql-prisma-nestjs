import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEquipmentOrThrowArgs } from "./args/FindUniqueEquipmentOrThrowArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class FindUniqueEquipmentOrThrowResolver {
  @Query(_returns => Equipment, {
    nullable: true
  })
  async getEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueEquipmentOrThrowArgs) args: FindUniqueEquipmentOrThrowArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).equipment.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findUniqueOrThrow')),
    });
  }
}
