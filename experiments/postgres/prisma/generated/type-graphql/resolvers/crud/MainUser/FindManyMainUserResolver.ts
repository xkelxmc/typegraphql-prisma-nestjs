import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMainUserArgs } from "./args/FindManyMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class FindManyMainUserResolver {
  @Query(_returns => [MainUser], {
    nullable: false
  })
  async mainUsers(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyMainUserArgs) args: FindManyMainUserArgs): Promise<MainUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findMany');
    return getPrismaFromContext(ctx).user.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findMany')),
    });
  }
}
