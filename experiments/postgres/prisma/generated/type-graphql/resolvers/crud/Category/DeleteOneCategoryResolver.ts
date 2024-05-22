import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCategoryArgs } from "./args/DeleteOneCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class DeleteOneCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: true
  })
  async deleteOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneCategoryArgs) args: DeleteOneCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'delete');
    return getPrismaFromContext(ctx).category.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'delete')),
    });
  }
}
