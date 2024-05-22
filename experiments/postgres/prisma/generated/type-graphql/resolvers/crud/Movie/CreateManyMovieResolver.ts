import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyMovieArgs } from "./args/CreateManyMovieArgs";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class CreateManyMovieResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyMovieArgs) args: CreateManyMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'createMany');
    return getPrismaFromContext(ctx).movie.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'createMany')),
    });
  }
}
