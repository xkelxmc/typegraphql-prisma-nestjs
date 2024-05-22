import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieArgs } from "./args/GroupByMovieArgs";
import { Movie } from "../../../models/Movie";
import { MovieGroupBy } from "../../outputs/MovieGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class GroupByMovieResolver {
  @Query(_returns => [MovieGroupBy], {
    nullable: false
  })
  async groupByMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByMovieArgs) args: GroupByMovieArgs): Promise<MovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'groupBy');
    return getPrismaFromContext(ctx).movie.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
