import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyHiddenArgs } from "./args/FindManyHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class FindManyHiddenResolver {
  @Query(_returns => [Hidden], {
    nullable: false
  })
  async hiddens(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyHiddenArgs) args: FindManyHiddenArgs): Promise<Hidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'findMany');
    return getPrismaFromContext(ctx).hidden.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'findMany')),
    });
  }
}
