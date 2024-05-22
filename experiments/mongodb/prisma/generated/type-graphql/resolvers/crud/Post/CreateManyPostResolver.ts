import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyPostArgs } from "./args/CreateManyPostArgs";
import { Post } from "../../../models/Post";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class CreateManyPostResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'createMany');
    return getPrismaFromContext(ctx).post.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'createMany')),
    });
  }
}
