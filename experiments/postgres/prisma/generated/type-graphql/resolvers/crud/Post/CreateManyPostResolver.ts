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
  async createManyPost(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyPostArgs) args: CreateManyPostArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'post', 'post', 'createMany');
    return getPrismaFromContext(ctx).post.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'post', 'post', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'post', 'post', 'createMany')),
    });
  }
}
