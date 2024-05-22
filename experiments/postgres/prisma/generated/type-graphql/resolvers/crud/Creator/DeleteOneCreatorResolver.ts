import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCreatorArgs } from "./args/DeleteOneCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class DeleteOneCreatorResolver {
  @Mutation(_returns => Creator, {
    nullable: true
  })
  async deleteOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => DeleteOneCreatorArgs) args: DeleteOneCreatorArgs): Promise<Creator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'delete');
    return getPrismaFromContext(ctx).creator.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'delete')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'delete')),
    });
  }
}
