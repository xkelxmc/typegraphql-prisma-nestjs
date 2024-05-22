import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoryOrThrowArgs } from "./args/FindFirstCategoryOrThrowArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class FindFirstCategoryOrThrowResolver {
  @Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategoryOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstCategoryOrThrowArgs) args: FindFirstCategoryOrThrowArgs): Promise<Category | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).category.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findFirstOrThrow')),
    });
  }
}
