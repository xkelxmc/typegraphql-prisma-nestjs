import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class UpdateManyUserResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'updateMany');
    return getPrismaFromContext(ctx).user.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'updateMany')),
    });
  }
}
