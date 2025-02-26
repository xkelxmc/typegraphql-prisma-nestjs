import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class FindManyUserResolver {
  @Query(_returns => [User], {
    nullable: false
  })
  async users(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findMany');
    return getPrismaFromContext(ctx).user.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findMany')),
    });
  }
}
