import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDirectorArgs } from "./args/DeleteOneDirectorArgs";
import { Director } from "../../../models/Director";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class DeleteOneDirectorResolver {
  @Mutation(_returns => Director, {
    nullable: true
  })
  async deleteOneDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneDirectorArgs) args: DeleteOneDirectorArgs): Promise<Director | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'delete');
    return getPrismaFromContext(ctx).director.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'delete')),
    });
  }
}
