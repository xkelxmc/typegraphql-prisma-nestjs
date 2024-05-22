import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class DeleteManyMovieResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyMovieArgs) args: DeleteManyMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'deleteMany');
    return getPrismaFromContext(ctx).movie.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'deleteMany')),
    });
  }
}
