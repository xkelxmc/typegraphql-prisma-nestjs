import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyPostArgs } from "./args/UpdateManyPostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class UpdateManyPostResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'updateMany');
    return getPrismaFromContext(ctx).post.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'updateMany')),
    });
  }
}
