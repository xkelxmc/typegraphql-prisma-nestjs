import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryCreateManyInput } from "../../../inputs/CategoryCreateManyInput";

@ArgsType()
export class CreateManyCategoryArgs {
  @Field(_type => [CategoryCreateManyInput], {
    nullable: false
  })
  data!: CategoryCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
