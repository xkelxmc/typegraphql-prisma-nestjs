import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateManyInput } from "../../../inputs/HiddenCreateManyInput";

@ArgsType()
export class CreateManyHiddenArgs {
  @Field(_type => [HiddenCreateManyInput], {
    nullable: false
  })
  data!: HiddenCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
