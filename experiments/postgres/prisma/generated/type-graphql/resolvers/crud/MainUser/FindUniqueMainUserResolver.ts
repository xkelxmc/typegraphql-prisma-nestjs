import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMainUserArgs } from "./args/FindUniqueMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class FindUniqueMainUserResolver {
  @Query(_returns => MainUser, {
    nullable: true
  })
  async mainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueMainUserArgs) args: FindUniqueMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUnique');
    return getPrismaFromContext(ctx).user.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUnique')),
    });
  }
}
