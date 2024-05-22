import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryOrThrowArgs } from "./args/FindUniqueCategoryOrThrowArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class FindUniqueCategoryOrThrowResolver {
  @Query(_returns => Category, {
    nullable: true
  })
  async getCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCategoryOrThrowArgs) args: FindUniqueCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).category.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findUniqueOrThrow')),
    });
  }
}
