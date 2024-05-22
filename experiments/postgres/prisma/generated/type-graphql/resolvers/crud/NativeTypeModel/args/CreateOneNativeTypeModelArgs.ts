import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateInput } from "../../../inputs/NativeTypeModelCreateInput";

@ArgsType()
export class CreateOneNativeTypeModelArgs {
  @Field(_type => NativeTypeModelCreateInput, {
    nullable: true
  })
  data?: NativeTypeModelCreateInput | undefined;
}
