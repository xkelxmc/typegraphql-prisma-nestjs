import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieOrThrowArgs } from "./args/FindUniqueMovieOrThrowArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class FindUniqueMovieOrThrowResolver {
  @Query(_returns => Movie, {
    nullable: true
  })
  async getMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMovieOrThrowArgs) args: FindUniqueMovieOrThrowArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findUniqueOrThrow')),
    });
  }
}
