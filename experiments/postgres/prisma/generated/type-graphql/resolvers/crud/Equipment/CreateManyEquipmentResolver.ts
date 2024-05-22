import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyEquipmentArgs } from "./args/CreateManyEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class CreateManyEquipmentResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyEquipmentArgs) args: CreateManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'createMany');
    return getPrismaFromContext(ctx).equipment.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'createMany')),
    });
  }
}
