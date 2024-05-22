import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserUpdateInput } from "../../../inputs/MainUserUpdateInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@ArgsType()
export class UpdateOneMainUserArgs {
  @Field(_type => MainUserUpdateInput, {
    nullable: false
  })
  data!: MainUserUpdateInput;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: false
  })
  where!: MainUserWhereUniqueInput;
}
