import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNativeTypeModelArgs } from "./args/AggregateNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AggregateNativeTypeModel } from "../../outputs/AggregateNativeTypeModel";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class AggregateNativeTypeModelResolver {
  @Query(_returns => AggregateNativeTypeModel, {
    nullable: false
  })
  async aggregateNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateNativeTypeModelArgs) args: AggregateNativeTypeModelArgs): Promise<AggregateNativeTypeModel> {
    return getPrismaFromContext(ctx).nativeTypeModel.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'aggregate'),
    });
  }
}
