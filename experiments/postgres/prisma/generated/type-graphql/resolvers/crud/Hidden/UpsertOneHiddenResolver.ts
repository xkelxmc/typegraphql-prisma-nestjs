import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneHiddenArgs } from "./args/UpsertOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class UpsertOneHiddenResolver {
  @Mutation(_returns => Hidden, {
    nullable: false
  })
  async upsertOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneHiddenArgs) args: UpsertOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'upsert');
    return getPrismaFromContext(ctx).hidden.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'upsert')),
    });
  }
}
