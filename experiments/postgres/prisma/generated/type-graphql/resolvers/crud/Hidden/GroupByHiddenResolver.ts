import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByHiddenArgs } from "./args/GroupByHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { HiddenGroupBy } from "../../outputs/HiddenGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class GroupByHiddenResolver {
  @Query(_returns => [HiddenGroupBy], {
    nullable: false
  })
  async groupByHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByHiddenArgs) args: GroupByHiddenArgs): Promise<HiddenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'groupBy');
    return getPrismaFromContext(ctx).hidden.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
