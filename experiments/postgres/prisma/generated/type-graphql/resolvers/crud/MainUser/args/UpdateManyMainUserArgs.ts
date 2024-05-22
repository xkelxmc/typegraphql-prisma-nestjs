import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserUpdateManyMutationInput } from "../../../inputs/MainUserUpdateManyMutationInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";

@ArgsType()
export class UpdateManyMainUserArgs {
  @Field(_type => MainUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: MainUserUpdateManyMutationInput;

  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;
}
