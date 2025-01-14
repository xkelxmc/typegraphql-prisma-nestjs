import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class FindFirstUserResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirst');
    return getPrismaFromContext(ctx).user.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirst')),
    });
  }
}
