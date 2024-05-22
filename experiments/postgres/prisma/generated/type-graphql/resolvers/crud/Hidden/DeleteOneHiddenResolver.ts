import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneHiddenArgs } from "./args/DeleteOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class DeleteOneHiddenResolver {
  @Mutation(_returns => Hidden, {
    nullable: true
  })
  async deleteOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneHiddenArgs) args: DeleteOneHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'delete');
    return getPrismaFromContext(ctx).hidden.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'delete')),
    });
  }
}
