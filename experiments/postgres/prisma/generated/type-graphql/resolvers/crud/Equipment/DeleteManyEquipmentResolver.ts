import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyEquipmentArgs } from "./args/DeleteManyEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Equipment)
export class DeleteManyEquipmentResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEquipment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyEquipmentArgs) args: DeleteManyEquipmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Equipment', 'equipment', 'deleteMany');
    return getPrismaFromContext(ctx).equipment.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Equipment', 'equipment', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Equipment', 'equipment', 'deleteMany')),
    });
  }
}
