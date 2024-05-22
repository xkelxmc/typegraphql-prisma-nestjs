import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieArgs } from "./args/FindFirstMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class FindFirstMovieResolver {
  @Query(_returns => Movie, {
    nullable: true
  })
  async findFirstMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMovieArgs) args: FindFirstMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findFirst');
    return getPrismaFromContext(ctx).movie.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findFirst')),
    });
  }
}
