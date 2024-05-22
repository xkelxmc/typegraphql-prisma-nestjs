import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEquipmentArgs } from "./args/FindFirstEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class FindFirstEquipmentResolver {
  @Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstEquipmentArgs) args: FindFirstEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findFirst');
    return getPrismaFromContext(ctx).equipment.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findFirst')),
    });
  }
}
