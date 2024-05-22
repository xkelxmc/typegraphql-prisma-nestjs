import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyHiddenArgs } from "./args/UpdateManyHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Hidden)
export class UpdateManyHiddenResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyHidden(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args(_type => UpdateManyHiddenArgs) args: UpdateManyHiddenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Hidden', 'hidden', 'updateMany');
    return getPrismaFromContext(ctx).hidden.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx, 'Hidden', 'hidden', 'updateMany')),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Hidden', 'hidden', 'updateMany')),
    });
  }
}
