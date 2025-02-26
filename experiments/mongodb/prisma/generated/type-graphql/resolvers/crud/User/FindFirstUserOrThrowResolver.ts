import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class FindFirstUserOrThrowResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirstOrThrow');
    return getPrismaFromContext(ctx).user.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirstOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirstOrThrow')),
    });
  }
}
