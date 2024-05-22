import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCategoryArgs } from "./args/UpsertOneCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class UpsertOneCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: false
  })
  async upsertOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneCategoryArgs) args: UpsertOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'upsert');
    return getPrismaFromContext(ctx).category.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'upsert')),
    });
  }
}
