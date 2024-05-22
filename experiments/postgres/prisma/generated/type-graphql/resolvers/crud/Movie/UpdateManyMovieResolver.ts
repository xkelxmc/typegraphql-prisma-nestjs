import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class UpdateManyMovieResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyMovieArgs) args: UpdateManyMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'updateMany');
    return getPrismaFromContext(ctx).movie.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'updateMany')),
    });
  }
}
