import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

@InputType("NullableIntFieldUpdateOperationsInput", {})
export class NullableIntFieldUpdateOperationsInput {
  @Field(_type => Int, {
    nullable: true
  })
  set?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  increment?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  decrement?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  multiply?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  divide?: number | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
