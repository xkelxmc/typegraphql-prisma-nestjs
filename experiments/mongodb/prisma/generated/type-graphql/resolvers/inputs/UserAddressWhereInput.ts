import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableFilter } from "../../../global/inputs/IntNullableFilter";
import { StringFilter } from "../../../global/inputs/StringFilter";

@InputType("UserAddressWhereInput", {})
export class UserAddressWhereInput {
  @Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  AND?: UserAddressWhereInput[] | undefined;

  @Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  OR?: UserAddressWhereInput[] | undefined;

  @Field(_type => [UserAddressWhereInput], {
    nullable: true
  })
  NOT?: UserAddressWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  street?: StringFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  number?: IntNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;
}
