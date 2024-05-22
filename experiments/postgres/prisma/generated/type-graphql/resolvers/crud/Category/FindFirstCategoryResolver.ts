import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class FindFirstCategoryResolver {
  @Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCategoryArgs) args: FindFirstCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findFirst');
    return getPrismaFromContext(ctx).category.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findFirst')),
    });
  }
}
