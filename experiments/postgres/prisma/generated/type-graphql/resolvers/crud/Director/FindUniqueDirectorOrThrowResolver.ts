import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDirectorOrThrowArgs } from "./args/FindUniqueDirectorOrThrowArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class FindUniqueDirectorOrThrowResolver {
  @Query(_returns => Director, {
    nullable: true
  })
  async getDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueDirectorOrThrowArgs) args: FindUniqueDirectorOrThrowArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).director.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findUniqueOrThrow')),
    });
  }
}
