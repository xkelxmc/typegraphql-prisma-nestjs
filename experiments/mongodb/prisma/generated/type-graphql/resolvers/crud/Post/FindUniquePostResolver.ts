import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostArgs } from "./args/FindUniquePostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class FindUniquePostResolver {
  @Query(_returns => Post, {
    nullable: true
  })
  async post(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniquePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Post', 'post', 'findUnique');
    return getPrismaFromContext(ctx).post.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Post', 'post', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Post', 'post', 'findUnique')),
    });
  }
}
