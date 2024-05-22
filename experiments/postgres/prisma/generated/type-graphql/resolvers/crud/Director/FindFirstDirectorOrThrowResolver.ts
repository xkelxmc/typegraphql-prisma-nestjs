import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDirectorOrThrowArgs } from "./args/FindFirstDirectorOrThrowArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class FindFirstDirectorOrThrowResolver {
  @Query(_returns => Director, {
    nullable: true
  })
  async findFirstDirectorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstDirectorOrThrowArgs) args: FindFirstDirectorOrThrowArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).director.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findFirstOrThrow')),
    });
  }
}
