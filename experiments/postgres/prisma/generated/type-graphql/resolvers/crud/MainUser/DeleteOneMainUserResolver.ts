import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMainUserArgs } from "./args/DeleteOneMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class DeleteOneMainUserResolver {
  @Mutation(_returns => MainUser, {
    nullable: true
  })
  async deleteOneMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneMainUserArgs) args: DeleteOneMainUserArgs): Promise<MainUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'delete');
    return getPrismaFromContext(ctx).user.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'delete')),
    });
  }
}
