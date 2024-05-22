import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateManyInput } from "../../../inputs/CreatorCreateManyInput";

@ArgsType()
export class CreateManyCreatorArgs {
  @Field(_type => [CreatorCreateManyInput], {
    nullable: false
  })
  data!: CreatorCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
