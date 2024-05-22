import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieArgs } from "./args/FindUniqueMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class FindUniqueMovieResolver {
  @Query(_returns => Movie, {
    nullable: true
  })
  async movie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMovieArgs) args: FindUniqueMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findUnique');
    return getPrismaFromContext(ctx).movie.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findUnique')),
    });
  }
}
