import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@ArgsType()
export class FindUniqueMainUserOrThrowArgs {
  @Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;
}
