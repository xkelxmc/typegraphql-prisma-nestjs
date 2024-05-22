import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class UpdateManyCategoryResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyCategoryArgs) args: UpdateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'updateMany');
    return getPrismaFromContext(ctx).category.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'updateMany')),
    });
  }
}
