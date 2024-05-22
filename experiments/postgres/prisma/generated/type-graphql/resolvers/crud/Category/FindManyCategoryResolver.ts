import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class FindManyCategoryResolver {
  @Query(_returns => [Category], {
    nullable: false
  })
  async categories(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyCategoryArgs) args: FindManyCategoryArgs): Promise<Category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'findMany');
    return getPrismaFromContext(ctx).category.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'findMany')),
    });
  }
}
