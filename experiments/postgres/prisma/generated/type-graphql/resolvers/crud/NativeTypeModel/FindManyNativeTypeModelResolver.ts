import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class FindManyNativeTypeModelResolver {
  @Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyNativeTypeModelArgs) args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'findMany');
    return getPrismaFromContext(ctx).nativeTypeModel.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'findMany')),
    });
  }
}
