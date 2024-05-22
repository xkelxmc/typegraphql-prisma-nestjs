import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCreatorArgs } from "./args/UpdateManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class UpdateManyCreatorResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyCreatorArgs) args: UpdateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'updateMany');
    return getPrismaFromContext(ctx).creator.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'updateMany')),
    });
  }
}
