import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateInput } from "../../../inputs/HiddenCreateInput";

@ArgsType()
export class CreateOneHiddenArgs {
  @Field(_type => HiddenCreateInput, {
    nullable: true
  })
  data?: HiddenCreateInput | undefined;
}
