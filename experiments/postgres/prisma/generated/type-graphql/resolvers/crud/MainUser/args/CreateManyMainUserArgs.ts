import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserCreateManyInput } from "../../../inputs/MainUserCreateManyInput";

@ArgsType()
export class CreateManyMainUserArgs {
  @Field(_type => [MainUserCreateManyInput], {
    nullable: false
  })
  data!: MainUserCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
