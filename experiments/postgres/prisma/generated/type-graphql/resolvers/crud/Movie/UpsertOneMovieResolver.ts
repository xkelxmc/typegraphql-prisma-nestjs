import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieArgs } from "./args/UpsertOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class UpsertOneMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: false
  })
  async upsertOneMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneMovieArgs) args: UpsertOneMovieArgs): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'upsert');
    return getPrismaFromContext(ctx).movie.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'upsert')),
    });
  }
}
