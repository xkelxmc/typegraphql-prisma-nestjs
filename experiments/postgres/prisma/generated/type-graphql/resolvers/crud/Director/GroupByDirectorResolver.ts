import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDirectorArgs } from "./args/GroupByDirectorArgs";
import { Director } from "../../../models/Director";
import { DirectorGroupBy } from "../../outputs/DirectorGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class GroupByDirectorResolver {
  @Query(_returns => [DirectorGroupBy], {
    nullable: false
  })
  async groupByDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByDirectorArgs) args: GroupByDirectorArgs): Promise<DirectorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'groupBy');
    return getPrismaFromContext(ctx).director.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
