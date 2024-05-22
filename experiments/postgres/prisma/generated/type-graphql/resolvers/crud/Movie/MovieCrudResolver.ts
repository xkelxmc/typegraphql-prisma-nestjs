import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs";
import { CreateManyMovieArgs } from "./args/CreateManyMovieArgs";
import { CreateOneMovieArgs } from "./args/CreateOneMovieArgs";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { DeleteOneMovieArgs } from "./args/DeleteOneMovieArgs";
import { FindFirstMovieArgs } from "./args/FindFirstMovieArgs";
import { FindFirstMovieOrThrowArgs } from "./args/FindFirstMovieOrThrowArgs";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { FindUniqueMovieArgs } from "./args/FindUniqueMovieArgs";
import { FindUniqueMovieOrThrowArgs } from "./args/FindUniqueMovieOrThrowArgs";
import { GroupByMovieArgs } from "./args/GroupByMovieArgs";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { UpdateOneMovieArgs } from "./args/UpdateOneMovieArgs";
import { UpsertOneMovieArgs } from "./args/UpsertOneMovieArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Movie } from "../../../models/Movie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovie } from "../../outputs/AggregateMovie";
import { MovieGroupBy } from "../../outputs/MovieGroupBy";

@Resolver(_of => Movie)
export class MovieCrudResolver {
  @Query(_returns => AggregateMovie, {
    nullable: false
  })
  async aggregateMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateMovieArgs) args: AggregateMovieArgs): Promise<AggregateMovie> {
    return getPrismaFromContext(ctx).movie.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'aggregate'),
    });
  }

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

  @Query(_returns => Movie, {
    nullable: true
  })
  async findFirstMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMovieArgs) args: FindFirstMovieArgs): Promise<Movie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findFirst');
    return getPrismaFromContext(ctx).movie.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findFirst')),
    });
  }

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

  @Query(_returns => [Movie], {
    nullable: false
  })
  async movies(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyMovieArgs) args: FindManyMovieArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'findMany');
    return getPrismaFromContext(ctx).movie.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', 'movie', 'findMany')),
    });
  }

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

  @Query(_returns => [MovieGroupBy], {
    nullable: false
  })
  async groupByMovie(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => GroupByMovieArgs) args: GroupByMovieArgs): Promise<MovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'Movie', 'movie', 'groupBy');
    return getPrismaFromContext(ctx).movie.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Movie', 'movie', 'groupBy')),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

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
