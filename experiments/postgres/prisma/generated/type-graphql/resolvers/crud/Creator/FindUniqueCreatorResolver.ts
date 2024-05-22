import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCreatorArgs } from "./args/FindUniqueCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class FindUniqueCreatorResolver {
  @Query(_returns => Creator, {
    nullable: true
  })
  async creator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => FindUniqueCreatorArgs) args: FindUniqueCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'findUnique');
    return getPrismaFromContext(ctx).creator.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'findUnique')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'findUnique')),
    });
  }
}
