import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { User } from "../../../models/User";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class GroupByUserResolver {
  @Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'groupBy');
    return getPrismaFromContext(ctx).user.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
