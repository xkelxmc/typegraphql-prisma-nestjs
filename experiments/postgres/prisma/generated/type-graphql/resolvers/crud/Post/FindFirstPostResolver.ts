import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostArgs } from "./args/FindFirstPostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class FindFirstPostResolver {
  @Query(_returns => Post, {
    nullable: true
  })
  async findFirstPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstPostArgs) args: FindFirstPostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findFirst');
    return getPrismaFromContext(ctx).post.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findFirst')),
    });
  }
}
