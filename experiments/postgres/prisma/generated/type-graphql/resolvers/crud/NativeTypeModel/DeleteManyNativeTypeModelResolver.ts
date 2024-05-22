import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyNativeTypeModelArgs } from "./args/DeleteManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class DeleteManyNativeTypeModelResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyNativeTypeModelArgs) args: DeleteManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany');
    return getPrismaFromContext(ctx).nativeTypeModel.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'deleteMany')),
    });
  }
}
