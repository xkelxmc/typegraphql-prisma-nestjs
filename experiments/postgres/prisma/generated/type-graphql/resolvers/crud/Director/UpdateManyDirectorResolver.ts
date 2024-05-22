import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class UpdateManyDirectorResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyDirectorArgs) args: UpdateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'updateMany');
    return getPrismaFromContext(ctx).director.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'updateMany')),
    });
  }
}
