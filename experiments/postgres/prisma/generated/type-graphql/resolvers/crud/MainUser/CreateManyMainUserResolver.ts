import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyMainUserArgs } from "./args/CreateManyMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class CreateManyMainUserResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyMainUserArgs) args: CreateManyMainUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'createMany');
    return getPrismaFromContext(ctx).user.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'createMany')),
    });
  }
}
