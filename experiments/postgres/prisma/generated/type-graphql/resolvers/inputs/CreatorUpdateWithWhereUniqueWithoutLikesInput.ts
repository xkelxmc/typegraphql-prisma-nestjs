import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@InputType("CreatorUpdateWithWhereUniqueWithoutLikesInput", {})
export class CreatorUpdateWithWhereUniqueWithoutLikesInput {
  @Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false
  })
  data!: CreatorUpdateWithoutLikesInput;
}
