import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { StringFilter } from "../../../global/inputs/StringFilter";
import { StringNullableFilter } from "../../../global/inputs/StringNullableFilter";

@InputType("HiddenWhereInput", {})
export class HiddenWhereInput {
  @Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  AND?: HiddenWhereInput[] | undefined;

  @Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  OR?: HiddenWhereInput[] | undefined;

  @Field(_type => [HiddenWhereInput], {
    nullable: true
  })
  NOT?: HiddenWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
