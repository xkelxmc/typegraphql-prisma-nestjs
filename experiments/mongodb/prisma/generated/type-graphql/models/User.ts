import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { UserAddress } from "../models/UserAddress";
import { UserCount } from "../resolvers/outputs/UserCount";

@ObjectType("User", {})
export class User {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => Int, {
    nullable: true
  })
  age?: number | null;

  @Field(_type => UserAddress, {
    nullable: false
  })
  address!: UserAddress;

  posts?: Post[];

  @Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
