import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Movie)
export class MovieRelationsResolver {
  @ResolveField(_type => Director, {
    nullable: false
  })
  async director(@Root() movie: Movie, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Director> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Movie', '', '');
    return getPrismaFromContext(ctx).movie.findUniqueOrThrow({
      where: {
        movieCompoundId: {
          directorFirstName: movie.directorFirstName,
          directorLastName: movie.directorLastName,
          title: movie.title,
        },
      },
    }).director({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Movie', '', '')),
    });
  }
}
