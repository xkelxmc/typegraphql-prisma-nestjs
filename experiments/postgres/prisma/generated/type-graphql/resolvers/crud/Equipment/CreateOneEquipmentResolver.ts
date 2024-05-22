import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEquipmentArgs } from "./args/CreateOneEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class CreateOneEquipmentResolver {
  @Mutation(_returns => Equipment, {
    nullable: false
  })
  async createOneEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneEquipmentArgs) args: CreateOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'create');
    return getPrismaFromContext(ctx).equipment.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'create')),
    });
  }
}
