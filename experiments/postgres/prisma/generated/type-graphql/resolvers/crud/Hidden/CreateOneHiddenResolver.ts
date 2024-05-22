import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneHiddenArgs } from "./args/CreateOneHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class CreateOneHiddenResolver {
  @Mutation(_returns => Hidden, {
    nullable: false
  })
  async createOneHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneHiddenArgs) args: CreateOneHiddenArgs): Promise<Hidden> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'create');
    return getPrismaFromContext(ctx).hidden.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'create')),
    });
  }
}
