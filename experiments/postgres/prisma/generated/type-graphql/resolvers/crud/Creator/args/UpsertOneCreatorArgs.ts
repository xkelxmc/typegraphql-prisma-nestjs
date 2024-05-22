import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateInput } from "../../../inputs/CreatorCreateInput";
import { CreatorUpdateInput } from "../../../inputs/CreatorUpdateInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@ArgsType()
export class UpsertOneCreatorArgs {
  @Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @Field(_type => CreatorCreateInput, {
    nullable: false
  })
  create!: CreatorCreateInput;

  @Field(_type => CreatorUpdateInput, {
    nullable: false
  })
  update!: CreatorUpdateInput;
}
