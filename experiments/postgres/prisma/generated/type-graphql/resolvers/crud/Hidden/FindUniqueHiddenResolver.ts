import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueHiddenArgs } from "./args/FindUniqueHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class FindUniqueHiddenResolver {
  @Query(_returns => Hidden, {
    nullable: true
  })
  async hidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueHiddenArgs) args: FindUniqueHiddenArgs): Promise<Hidden | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findUnique');
    return getPrismaFromContext(ctx).hidden.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findUnique')),
    });
  }
}
