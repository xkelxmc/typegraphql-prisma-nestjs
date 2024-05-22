import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserCreateInput } from "../../../inputs/MainUserCreateInput";
import { MainUserUpdateInput } from "../../../inputs/MainUserUpdateInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@ArgsType()
export class UpsertOneMainUserArgs {
  @Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;

  @Field(_type => MainUserCreateInput, {
    nullable: false
  })
  create!: MainUserCreateInput;

  @Field(_type => MainUserUpdateInput, {
    nullable: false
  })
  update!: MainUserUpdateInput;
}
