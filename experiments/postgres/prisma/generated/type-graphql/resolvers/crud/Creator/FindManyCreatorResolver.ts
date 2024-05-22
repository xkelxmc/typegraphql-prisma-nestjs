import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class FindManyCreatorResolver {
  @Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindManyCreatorArgs) args: FindManyCreatorArgs): Promise<Creator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findMany');
    return getPrismaFromContext(ctx).creator.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findMany')),
    });
  }
}
