import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDirectorArgs } from "./args/FindUniqueDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class FindUniqueDirectorResolver {
  @Query(_returns => Director, {
    nullable: true
  })
  async director(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueDirectorArgs) args: FindUniqueDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'findUnique');
    return getPrismaFromContext(ctx).director.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'findUnique')),
    });
  }
}
