import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyNativeTypeModelArgs } from "./args/CreateManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => NativeTypeModel)
export class CreateManyNativeTypeModelResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNativeTypeModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyNativeTypeModelArgs) args: CreateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'NativeTypeModel', 'nativeTypeModel', 'createMany');
    return getPrismaFromContext(ctx).nativeTypeModel.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'NativeTypeModel', 'nativeTypeModel', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'NativeTypeModel', 'nativeTypeModel', 'createMany')),
    });
  }
}
