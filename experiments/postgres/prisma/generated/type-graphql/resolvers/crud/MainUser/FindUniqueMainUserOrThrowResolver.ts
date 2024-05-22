import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMainUserOrThrowArgs } from "./args/FindUniqueMainUserOrThrowArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class FindUniqueMainUserOrThrowResolver {
  @Query(_returns => MainUser, {
    nullable: true
  })
  async getMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMainUserOrThrowArgs) args: FindUniqueMainUserOrThrowArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUniqueOrThrow');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUniqueOrThrow')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUniqueOrThrow')),
    });
  }
}
