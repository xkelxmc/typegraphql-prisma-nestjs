import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMovieArgs } from "./args/DeleteOneMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class DeleteOneMovieResolver {
  @Mutation(_returns => Movie, {
    nullable: true
  })
  async deleteOneMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneMovieArgs) args: DeleteOneMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'delete');
    return getPrismaFromContext(ctx).movie.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'delete')),
    });
  }
}
