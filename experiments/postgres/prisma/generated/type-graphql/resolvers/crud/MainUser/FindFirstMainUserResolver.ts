import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMainUserArgs } from "./args/FindFirstMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class FindFirstMainUserResolver {
  @Query(_returns => MainUser, {
    nullable: true
  })
  async findFirstMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindFirstMainUserArgs) args: FindFirstMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirst');
    return getPrismaFromContext(ctx).user.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirst')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirst')),
    });
  }
}
