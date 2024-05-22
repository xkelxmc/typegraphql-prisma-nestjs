import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelUpdateInput } from "../../../inputs/NativeTypeModelUpdateInput";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@ArgsType()
export class UpdateOneNativeTypeModelArgs {
  @Field(_type => NativeTypeModelUpdateInput, {
    nullable: false
  })
  data!: NativeTypeModelUpdateInput;

  @Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;
}
