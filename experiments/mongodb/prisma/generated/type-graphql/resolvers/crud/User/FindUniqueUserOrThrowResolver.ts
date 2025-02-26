import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class FindUniqueUserOrThrowResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async getUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUniqueOrThrow')),
    });
  }
}
