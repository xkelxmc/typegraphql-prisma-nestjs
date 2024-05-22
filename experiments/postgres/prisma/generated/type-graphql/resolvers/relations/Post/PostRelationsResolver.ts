import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MainUser } from "../../../models/MainUser";
import { Post } from "../../../models/Post";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Post)
export class PostRelationsResolver {
  @ResolveField(_type => MainUser, {
    nullable: false
  })
  async author(@Root() post: Post, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<MainUser> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', '', '');
    return getPrismaFromContext(ctx).post.findUniqueOrThrow({
      where: {
        uuid: post.uuid,
      },
    }).author({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', '', '')),
    });
  }
}
