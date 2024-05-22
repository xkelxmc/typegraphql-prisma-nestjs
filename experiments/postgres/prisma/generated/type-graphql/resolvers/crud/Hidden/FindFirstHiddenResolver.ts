import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstHiddenArgs } from "./args/FindFirstHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class FindFirstHiddenResolver {
  @Query(_returns => Hidden, {
    nullable: true
  })
  async findFirstHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstHiddenArgs) args: FindFirstHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findFirst');
    return getPrismaFromContext(ctx).hidden.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findFirst')),
    });
  }
}
