import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class CreateOneUserResolver {
  @Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'create');
    return getPrismaFromContext(ctx).user.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'create')),
    });
  }
}
