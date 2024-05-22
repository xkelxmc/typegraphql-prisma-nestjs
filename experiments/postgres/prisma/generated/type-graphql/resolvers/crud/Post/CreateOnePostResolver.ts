import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePostArgs } from "./args/CreateOnePostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class CreateOnePostResolver {
  @Mutation(_returns => Post, {
    nullable: false
  })
  async createOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOnePostArgs) args: CreateOnePostArgs): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'create');
    return getPrismaFromContext(ctx).post.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'create')),
    });
  }
}
