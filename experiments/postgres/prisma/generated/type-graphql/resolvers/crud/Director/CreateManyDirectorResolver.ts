import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyDirectorArgs } from "./args/CreateManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Director)
export class CreateManyDirectorResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDirector(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyDirectorArgs) args: CreateManyDirectorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Director', 'director', 'createMany');
    return getPrismaFromContext(ctx).director.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Director', 'director', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Director', 'director', 'createMany')),
    });
  }
}
