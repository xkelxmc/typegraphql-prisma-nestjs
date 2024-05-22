import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDirectorArgs } from "./args/UpsertOneDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class UpsertOneDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: false
  })
  async upsertOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneDirectorArgs) args: UpsertOneDirectorArgs): Promise<Director> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'upsert');
    return getPrismaFromContext(ctx).director.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'upsert')),
    });
  }
}
