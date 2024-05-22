import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEquipmentArgs } from "./args/FindUniqueEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class FindUniqueEquipmentResolver {
  @Query(_returns => Equipment, {
    nullable: true
  })
  async equipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueEquipmentArgs) args: FindUniqueEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'findUnique');
    return getPrismaFromContext(ctx).equipment.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'findUnique')),
    });
  }
}
