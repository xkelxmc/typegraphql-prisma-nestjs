import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPostArgs } from "./args/FindManyPostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class FindManyPostResolver {
  @Query(_returns => [Post], {
    nullable: false
  })
  async posts(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyPostArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findMany');
    return getPrismaFromContext(ctx).post.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findMany')),
    });
  }
}
