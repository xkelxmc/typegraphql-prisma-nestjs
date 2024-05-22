import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateInput } from "../../../inputs/NativeTypeModelCreateInput";
import { NativeTypeModelUpdateInput } from "../../../inputs/NativeTypeModelUpdateInput";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@ArgsType()
export class UpsertOneNativeTypeModelArgs {
  @Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;

  @Field(_type => NativeTypeModelCreateInput, {
    nullable: false
  })
  create!: NativeTypeModelCreateInput;

  @Field(_type => NativeTypeModelUpdateInput, {
    nullable: false
  })
  update!: NativeTypeModelUpdateInput;
}
