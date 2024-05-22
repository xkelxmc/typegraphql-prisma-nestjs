import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMainUserArgs } from "./args/CreateOneMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class CreateOneMainUserResolver {
  @Mutation(_returns => MainUser, {
    nullable: false
  })
  async createOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneMainUserArgs) args: CreateOneMainUserArgs): Promise<MainUser> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'create');
    return getPrismaFromContext(ctx).user.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'create')),
    });
  }
}
