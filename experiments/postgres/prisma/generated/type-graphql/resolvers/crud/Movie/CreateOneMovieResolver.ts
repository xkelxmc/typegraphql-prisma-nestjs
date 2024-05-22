import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieArgs } from "./args/CreateOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class CreateOneMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: false
  })
  async createOneMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneMovieArgs) args: CreateOneMovieArgs): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'create');
    return getPrismaFromContext(ctx).movie.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'create')),
    });
  }
}
