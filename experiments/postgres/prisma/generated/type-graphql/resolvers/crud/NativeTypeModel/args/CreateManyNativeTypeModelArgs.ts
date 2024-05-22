import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelCreateManyInput } from "../../../inputs/NativeTypeModelCreateManyInput";

@ArgsType()
export class CreateManyNativeTypeModelArgs {
  @Field(_type => [NativeTypeModelCreateManyInput], {
    nullable: false
  })
  data!: NativeTypeModelCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
