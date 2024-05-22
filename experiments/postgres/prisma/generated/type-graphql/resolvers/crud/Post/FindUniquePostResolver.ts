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
  async post(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniquePostArgs) args: FindUniquePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'findUnique');
    return getPrismaFromContext(ctx).post.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'findUnique')),
    });
  }
}
