import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class CreateManyCategoryResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyCategoryArgs) args: CreateManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'createMany');
    return getPrismaFromContext(ctx).category.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'createMany')),
    });
  }
}
