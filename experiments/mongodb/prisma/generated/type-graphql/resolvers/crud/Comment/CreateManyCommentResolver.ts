import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCommentArgs } from "./args/CreateManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Comment)
export class CreateManyCommentResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyComment(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyCommentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Comment', 'comment', 'createMany');
    return getPrismaFromContext(ctx).comment.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Comment', 'comment', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Comment', 'comment', 'createMany')),
    });
  }
}
