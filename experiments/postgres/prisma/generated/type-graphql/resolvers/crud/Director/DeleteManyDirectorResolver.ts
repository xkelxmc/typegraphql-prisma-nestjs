import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class DeleteManyDirectorResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteManyDirectorArgs) args: DeleteManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'deleteMany');
    return getPrismaFromContext(ctx).director.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'deleteMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'deleteMany')),
    });
  }
}
