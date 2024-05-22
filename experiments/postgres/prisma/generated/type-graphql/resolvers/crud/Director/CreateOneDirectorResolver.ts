import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneDirectorArgs } from "./args/CreateOneDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class CreateOneDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: false
  })
  async createOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneDirectorArgs) args: CreateOneDirectorArgs): Promise<Director> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'create');
    return getPrismaFromContext(ctx).director.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'create')),
    });
  }
}
