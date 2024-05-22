import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDirectorArgs } from "./args/FindFirstDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class FindFirstDirectorResolver {
  @Query(_returns => Director, {
    nullable: true
  })
  async findFirstDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstDirectorArgs) args: FindFirstDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findFirst');
    return getPrismaFromContext(ctx).director.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findFirst')),
    });
  }
}
