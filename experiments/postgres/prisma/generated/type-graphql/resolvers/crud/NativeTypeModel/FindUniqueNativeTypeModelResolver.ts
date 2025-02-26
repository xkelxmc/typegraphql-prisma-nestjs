import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNativeTypeModelArgs } from "./args/FindUniqueNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class FindUniqueNativeTypeModelResolver {
  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async nativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueNativeTypeModelArgs) args: FindUniqueNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findUnique');
    return getPrismaFromContext(ctx).nativeTypeModel.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findUnique')),
    });
  }
}
