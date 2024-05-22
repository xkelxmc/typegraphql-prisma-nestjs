import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCreatorArgs } from "./args/CreateOneCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class CreateOneCreatorResolver {
  @Mutation(_returns => Creator, {
    nullable: false
  })
  async createOneCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateOneCreatorArgs) args: CreateOneCreatorArgs): Promise<Creator> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'create');
    return getPrismaFromContext(ctx).creator.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'create')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'create')),
    });
  }
}
