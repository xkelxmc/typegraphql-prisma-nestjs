import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreateManyProblemAndReturnOutputTypeCreatorArgs } from "./args/CreateManyProblemAndReturnOutputTypeCreatorArgs";
import { Creator } from "../../models/Creator";

@ObjectType("CreateManyProblemAndReturnOutputType", {})
export class CreateManyProblemAndReturnOutputType {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  @Field(_type => Int, {
    nullable: true
  })
  creatorId!: number | null;

  creator!: Creator | null;

  @Field(_type => Creator, {
    name: "creator",
    nullable: true
  })
  getCreator(@Root() root: CreateManyProblemAndReturnOutputType, @Args() args: CreateManyProblemAndReturnOutputTypeCreatorArgs): Creator | null {
    return root.creator;
  }
}
