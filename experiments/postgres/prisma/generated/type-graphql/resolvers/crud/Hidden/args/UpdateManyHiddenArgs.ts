import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenUpdateManyMutationInput } from "../../../inputs/HiddenUpdateManyMutationInput";
import { HiddenWhereInput } from "../../../inputs/HiddenWhereInput";

@ArgsType()
export class UpdateManyHiddenArgs {
  @Field(_type => HiddenUpdateManyMutationInput, {
    nullable: false
  })
  data!: HiddenUpdateManyMutationInput;

  @Field(_type => HiddenWhereInput, {
    nullable: true
  })
  where?: HiddenWhereInput | undefined;
}
