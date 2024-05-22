import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneDirectorArgs } from "./args/UpdateOneDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class UpdateOneDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: true
  })
  async updateOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneDirectorArgs) args: UpdateOneDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'update');
    return getPrismaFromContext(ctx).director.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'update')),
    });
  }
}
