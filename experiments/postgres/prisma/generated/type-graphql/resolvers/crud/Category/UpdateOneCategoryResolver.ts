import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoryArgs } from "./args/UpdateOneCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class UpdateOneCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: true
  })
  async updateOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneCategoryArgs) args: UpdateOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'update');
    return getPrismaFromContext(ctx).category.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'update')),
    });
  }
}
