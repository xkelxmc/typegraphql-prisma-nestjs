import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateInput } from "../../../inputs/CreatorCreateInput";

@ArgsType()
export class CreateOneCreatorArgs {
  @Field(_type => CreatorCreateInput, {
    nullable: false
  })
  data!: CreatorCreateInput;
}
