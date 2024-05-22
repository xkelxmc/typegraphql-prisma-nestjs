import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyMutationInput } from "../inputs/CreatorUpdateManyMutationInput";

@InputType("CreatorUpdateManyWithWhereWithoutLikesInput", {})
export class CreatorUpdateManyWithWhereWithoutLikesInput {
  @Field(_type => CreatorScalarWhereInput, {
    nullable: false
  })
  where!: CreatorScalarWhereInput;

  @Field(_type => CreatorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreatorUpdateManyMutationInput;
}
