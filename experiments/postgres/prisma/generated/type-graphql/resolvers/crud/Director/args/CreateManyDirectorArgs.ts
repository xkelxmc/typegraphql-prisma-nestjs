import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorCreateManyInput } from "../../../inputs/DirectorCreateManyInput";

@ArgsType()
export class CreateManyDirectorArgs {
  @Field(_type => [DirectorCreateManyInput], {
    nullable: false
  })
  data!: DirectorCreateManyInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
