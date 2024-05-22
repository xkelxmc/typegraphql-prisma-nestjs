import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCreatorArgs } from "./args/CreateManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Creator)
export class CreateManyCreatorResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCreator(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyCreatorArgs) args: CreateManyCreatorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Creator', 'creator', 'createMany');
    return getPrismaFromContext(ctx).creator.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Creator', 'creator', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Creator', 'creator', 'createMany')),
    });
  }
}
