import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCreatorArgs } from "./args/AggregateCreatorArgs";
import { Creator } from "../../../models/Creator";
import { AggregateCreator } from "../../outputs/AggregateCreator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class AggregateCreatorResolver {
  @Query(_returns => AggregateCreator, {
    nullable: false
  })
  async aggregateCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => AggregateCreatorArgs) args: AggregateCreatorArgs): Promise<AggregateCreator> {
    return getPrismaFromContext(ctx).creator.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'aggregate')),
      ...transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'aggregate'),
    });
  }
}
