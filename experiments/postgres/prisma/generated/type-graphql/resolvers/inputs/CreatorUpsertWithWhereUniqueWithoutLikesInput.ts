import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorUpdateWithoutLikesInput } from "../inputs/CreatorUpdateWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@InputType("CreatorUpsertWithWhereUniqueWithoutLikesInput", {})
export class CreatorUpsertWithWhereUniqueWithoutLikesInput {
  @Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @Field(_type => CreatorUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: CreatorUpdateWithoutLikesInput;

  @Field(_type => CreatorCreateWithoutLikesInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutLikesInput;
}
