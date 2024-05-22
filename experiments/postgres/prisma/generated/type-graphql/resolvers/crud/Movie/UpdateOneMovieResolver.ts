import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovieArgs } from "./args/UpdateOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class UpdateOneMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: true
  })
  async updateOneMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneMovieArgs) args: UpdateOneMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'update');
    return getPrismaFromContext(ctx).movie.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'update')),
    });
  }
}
