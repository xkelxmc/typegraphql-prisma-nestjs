import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMainUserArgs } from "./args/UpsertOneMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class UpsertOneMainUserResolver {
  @Mutation(_returns => MainUser, {
    nullable: false
  })
  async upsertOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneMainUserArgs) args: UpsertOneMainUserArgs): Promise<MainUser> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'upsert');
    return getPrismaFromContext(ctx).user.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'upsert')),
    });
  }
}
