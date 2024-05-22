import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCreatorArgs } from "./args/UpsertOneCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class UpsertOneCreatorResolver {
  @Mutation(_returns => Creator, {
    nullable: false
  })
  async upsertOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpsertOneCreatorArgs) args: UpsertOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'upsert');
    return getPrismaFromContext(ctx).creator.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'upsert')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'upsert')),
    });
  }
}
