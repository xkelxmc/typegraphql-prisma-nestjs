import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";

@ArgsType()
export class DeleteManyNativeTypeModelArgs {
  @Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;
}
