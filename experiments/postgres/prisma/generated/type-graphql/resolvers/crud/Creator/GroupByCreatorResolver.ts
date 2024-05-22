import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCreatorArgs } from "./args/GroupByCreatorArgs";
import { Creator } from "../../../models/Creator";
import { CreatorGroupBy } from "../../outputs/CreatorGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class GroupByCreatorResolver {
  @Query(_returns => [CreatorGroupBy], {
    nullable: false
  })
  async groupByCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByCreatorArgs) args: GroupByCreatorArgs): Promise<CreatorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'groupBy');
    return getPrismaFromContext(ctx).creator.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
