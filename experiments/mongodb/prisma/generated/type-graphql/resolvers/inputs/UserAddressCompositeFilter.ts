import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserAddressObjectEqualityInput } from "../inputs/UserAddressObjectEqualityInput";
import { UserAddressWhereInput } from "../inputs/UserAddressWhereInput";

@InputType("UserAddressCompositeFilter", {})
export class UserAddressCompositeFilter {
  @Field(_type => UserAddressObjectEqualityInput, {
    nullable: true
  })
  equals?: UserAddressObjectEqualityInput | undefined;

  @Field(_type => UserAddressWhereInput, {
    nullable: true
  })
  is?: UserAddressWhereInput | undefined;

  @Field(_type => UserAddressWhereInput, {
    nullable: true
  })
  isNot?: UserAddressWhereInput | undefined;
}
