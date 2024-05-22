import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateInput } from "../../../inputs/HiddenCreateInput";
import { HiddenUpdateInput } from "../../../inputs/HiddenUpdateInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@ArgsType()
export class UpsertOneHiddenArgs {
  @Field(_type => HiddenWhereUniqueInput, {
    nullable: false
  })
  where!: HiddenWhereUniqueInput;

  @Field(_type => HiddenCreateInput, {
    nullable: false
  })
  create!: HiddenCreateInput;

  @Field(_type => HiddenUpdateInput, {
    nullable: false
  })
  update!: HiddenUpdateInput;
}
