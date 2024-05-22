import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyHiddenArgs } from "./args/CreateManyHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class CreateManyHiddenResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => CreateManyHiddenArgs) args: CreateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'createMany');
    return getPrismaFromContext(ctx).hidden.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'createMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'createMany')),
    });
  }
}
