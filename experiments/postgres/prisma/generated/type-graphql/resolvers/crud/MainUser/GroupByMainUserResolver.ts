import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMainUserArgs } from "./args/GroupByMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { MainUserGroupBy } from "../../outputs/MainUserGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class GroupByMainUserResolver {
  @Query(_returns => [MainUserGroupBy], {
    nullable: false
  })
  async groupByMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByMainUserArgs) args: GroupByMainUserArgs): Promise<MainUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'groupBy');
    return getPrismaFromContext(ctx).user.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
