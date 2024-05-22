import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMainUserArgs } from "./args/UpdateOneMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class UpdateOneMainUserResolver {
  @Mutation(_returns => MainUser, {
    nullable: true
  })
  async updateOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneMainUserArgs) args: UpdateOneMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'update');
    return getPrismaFromContext(ctx).user.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'update')),
    });
  }
}
