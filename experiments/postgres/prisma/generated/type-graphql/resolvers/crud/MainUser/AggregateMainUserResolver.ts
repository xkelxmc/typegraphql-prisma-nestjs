import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMainUserArgs } from "./args/AggregateMainUserArgs";
import { MainUser } from "../../../models/MainUser";
import { AggregateMainUser } from "../../outputs/AggregateMainUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => MainUser)
export class AggregateMainUserResolver {
  @Query(_returns => AggregateMainUser, {
    nullable: false
  })
  async aggregateMainUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateMainUserArgs) args: AggregateMainUserArgs): Promise<AggregateMainUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'User', 'user', 'aggregate'),
    });
  }
}
