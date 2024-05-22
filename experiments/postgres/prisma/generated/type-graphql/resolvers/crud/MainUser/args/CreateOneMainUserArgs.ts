import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserCreateInput } from "../../../inputs/MainUserCreateInput";

@ArgsType()
export class CreateOneMainUserArgs {
  @Field(_type => MainUserCreateInput, {
    nullable: false
  })
  data!: MainUserCreateInput;
}
