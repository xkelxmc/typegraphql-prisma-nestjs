import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class FindManyDirectorResolver {
  @Query(_returns => [Director], {
    nullable: false
  })
  async directors(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyDirectorArgs) args: FindManyDirectorArgs): Promise<Director[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findMany');
    return getPrismaFromContext(ctx).director.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findMany')),
    });
  }
}
