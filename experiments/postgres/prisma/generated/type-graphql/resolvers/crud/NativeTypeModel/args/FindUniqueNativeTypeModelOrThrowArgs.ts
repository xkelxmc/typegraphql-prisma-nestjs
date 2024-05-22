import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@ArgsType()
export class FindUniqueNativeTypeModelOrThrowArgs {
  @Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: false
  })
  where!: NativeTypeModelWhereUniqueInput;
}
