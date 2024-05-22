import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNativeTypeModelOrThrowArgs } from "./args/FindUniqueNativeTypeModelOrThrowArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class FindUniqueNativeTypeModelOrThrowResolver {
  @Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async getNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueNativeTypeModelOrThrowArgs) args: FindUniqueNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).nativeTypeModel.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findUniqueOrThrow')),
    });
  }
}
