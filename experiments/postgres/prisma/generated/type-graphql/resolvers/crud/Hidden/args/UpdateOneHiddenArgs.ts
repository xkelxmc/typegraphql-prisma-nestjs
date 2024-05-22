import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenUpdateInput } from "../../../inputs/HiddenUpdateInput";
import { HiddenWhereUniqueInput } from "../../../inputs/HiddenWhereUniqueInput";

@ArgsType()
export class UpdateOneHiddenArgs {
  @Field(_type => HiddenUpdateInput, {
    nullable: false
  })
  data!: HiddenUpdateInput;

  @Field(_type => HiddenWhereUniqueInput, {
    nullable: false
  })
  where!: HiddenWhereUniqueInput;
}
