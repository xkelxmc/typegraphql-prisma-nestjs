import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePostArgs } from "./args/DeleteOnePostArgs";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class DeleteOnePostResolver {
  @Mutation(_returns => Post, {
    nullable: true
  })
  async deleteOnePost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOnePostArgs) args: DeleteOnePostArgs): Promise<Post | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'delete');
    return getPrismaFromContext(ctx).post.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'delete')),
    });
  }
}
