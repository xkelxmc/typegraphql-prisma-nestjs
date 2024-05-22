import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class FindManyMovieResolver {
  @Query(_returns => [Movie], {
    nullable: false
  })
  async movies(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyMovieArgs) args: FindManyMovieArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findMany');
    return getPrismaFromContext(ctx).movie.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findMany')),
    });
  }
}
