import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieOrThrowArgs } from "./args/FindFirstMovieOrThrowArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class FindFirstMovieOrThrowResolver {
  @Query(_returns => Movie, {
    nullable: true
  })
  async findFirstMovieOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMovieOrThrowArgs) args: FindFirstMovieOrThrowArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).movie.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findFirstOrThrow')),
    });
  }
}
