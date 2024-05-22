import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class FindUniqueCategoryResolver {
  @Query(_returns => Category, {
    nullable: true
  })
  async category(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCategoryArgs) args: FindUniqueCategoryArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findUnique');
    return getPrismaFromContext(ctx).category.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findUnique')),
    });
  }
}
