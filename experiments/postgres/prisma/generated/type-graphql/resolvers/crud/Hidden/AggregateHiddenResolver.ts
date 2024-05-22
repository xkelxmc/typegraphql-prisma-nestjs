import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateHiddenArgs } from "./args/AggregateHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { AggregateHidden } from "../../outputs/AggregateHidden";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class AggregateHiddenResolver {
  @Query(_returns => AggregateHidden, {
    nullable: false
  })
  async aggregateHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateHiddenArgs) args: AggregateHiddenArgs): Promise<AggregateHidden> {
    return getPrismaFromContext(ctx).hidden.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'aggregate'),
    });
  }
}
