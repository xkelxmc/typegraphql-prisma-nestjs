import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCategoryArgs } from "./args/CreateOneCategoryArgs";
import { Category } from "../../../models/Category";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class CreateOneCategoryResolver {
  @Mutation(_returns => Category, {
    nullable: false
  })
  async createOneCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneCategoryArgs) args: CreateOneCategoryArgs): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'create');
    return getPrismaFromContext(ctx).category.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'create')),
    });
  }
}
