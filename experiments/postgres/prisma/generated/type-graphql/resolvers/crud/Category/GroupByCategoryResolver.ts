import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";
import { Category } from "../../../models/Category";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class GroupByCategoryResolver {
  @Query(_returns => [CategoryGroupBy], {
    nullable: false
  })
  async groupByCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByCategoryArgs) args: GroupByCategoryArgs): Promise<CategoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'groupBy');
    return getPrismaFromContext(ctx).category.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
