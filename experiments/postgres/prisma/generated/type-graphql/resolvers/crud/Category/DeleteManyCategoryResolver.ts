import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Category)
export class DeleteManyCategoryResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategory(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyCategoryArgs) args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Category', 'category', 'deleteMany');
    return getPrismaFromContext(ctx).category.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Category', 'category', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Category', 'category', 'deleteMany')),
    });
  }
}
