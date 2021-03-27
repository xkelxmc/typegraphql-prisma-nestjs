import * as TypeGraphQL from "type-graphql";
import { FindManyProblemArgs } from "./args/FindManyProblemArgs";
import { Problem } from "../../../models/Problem";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Problem)
export class FindManyProblemResolver {
  @TypeGraphQL.Query(_returns => [Problem], {
    nullable: false
  })
  async problems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProblemArgs): Promise<Problem[]> {
    return getPrismaFromContext(ctx).problem.findMany(args);
  }
}
