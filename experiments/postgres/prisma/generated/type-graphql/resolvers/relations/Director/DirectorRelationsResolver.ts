import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { DirectorMoviesArgs } from "./args/DirectorMoviesArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class DirectorRelationsResolver {
  @ResolveField(_type => [Movie], {
    nullable: false
  })
  async movies(@Root() director: Director, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DirectorMoviesArgs) args: DirectorMoviesArgs): Promise<Movie[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', '', '');
    return getPrismaFromContext(ctx).director.findUniqueOrThrow({
      where: {
        firstName_lastName: {
          firstName: director.firstName,
          lastName: director.lastName,
        },
      },
    }).movies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', '', '')),
    });
  }
}
