import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEquipmentArgs } from "./args/DeleteOneEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class DeleteOneEquipmentResolver {
  @Mutation(_returns => Equipment, {
    nullable: true
  })
  async deleteOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneEquipmentArgs) args: DeleteOneEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'delete');
    return getPrismaFromContext(ctx).equipment.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'delete')),
    });
  }
}
