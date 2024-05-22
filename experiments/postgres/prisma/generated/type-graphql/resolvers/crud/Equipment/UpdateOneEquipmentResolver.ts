import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEquipmentArgs } from "./args/UpdateOneEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class UpdateOneEquipmentResolver {
  @Mutation(_returns => Equipment, {
    nullable: true
  })
  async updateOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneEquipmentArgs) args: UpdateOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'update');
    return getPrismaFromContext(ctx).equipment.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'update')),
    });
  }
}
