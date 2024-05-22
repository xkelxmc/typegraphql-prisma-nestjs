import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";

@ArgsType()
export class CreateOneDirectorArgs {
  @Field(_type => DirectorCreateInput, {
    nullable: false
  })
  data!: DirectorCreateInput;
}
