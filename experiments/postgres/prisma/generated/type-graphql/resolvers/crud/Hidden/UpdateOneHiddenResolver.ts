import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneHiddenArgs } from "./args/UpdateOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class UpdateOneHiddenResolver {
  @Mutation(_returns => Hidden, {
    nullable: true
  })
  async updateOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneHiddenArgs) args: UpdateOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'update');
    return getPrismaFromContext(ctx).hidden.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'update')),
    });
  }
}
