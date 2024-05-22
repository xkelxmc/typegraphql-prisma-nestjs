import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHiddenOrThrowArgs } from "./args/FindUniqueHiddenOrThrowArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class FindUniqueHiddenOrThrowResolver {
  @Query(_returns => Hidden, {
    nullable: true
  })
  async getHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueHiddenOrThrowArgs) args: FindUniqueHiddenOrThrowArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).hidden.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findUniqueOrThrow')),
    });
  }
}
