import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MainUser } from "../../../models/MainUser";
import { Post } from "../../../models/Post";
import { MainUserPostsArgs } from "./args/MainUserPostsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class MainUserRelationsResolver {
  @ResolveField(_type => [Post], {
    nullable: false
  })
  async clientPosts(@Root() mainUser: MainUser, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => MainUserPostsArgs) args: MainUserPostsArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', '', '');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: mainUser.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', '', '')),
    });
  }
}
