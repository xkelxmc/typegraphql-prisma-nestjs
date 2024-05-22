import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCreatorArgs } from "./args/UpdateOneCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class UpdateOneCreatorResolver {
  @Mutation(_returns => Creator, {
    nullable: true
  })
  async updateOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateOneCreatorArgs) args: UpdateOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'update');
    return getPrismaFromContext(ctx).creator.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'update')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'update')),
    });
  }
}
