import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressCreateInput } from "../inputs/UserAddressCreateInput";
import { UserAddressUpdateInput } from "../inputs/UserAddressUpdateInput";

@InputType("UserAddressUpdateEnvelopeInput", {})
export class UserAddressUpdateEnvelopeInput {
  @Field(_type => UserAddressCreateInput, {
    nullable: true
  })
  set?: UserAddressCreateInput | undefined;

  @Field(_type => UserAddressUpdateInput, {
    nullable: true
  })
  update?: UserAddressUpdateInput | undefined;
}
