import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MainUserCreateOrConnectWithoutPostsInput } from "../inputs/MainUserCreateOrConnectWithoutPostsInput";
import { MainUserCreateWithoutPostsInput } from "../inputs/MainUserCreateWithoutPostsInput";
import { MainUserUpdateToOneWithWhereWithoutPostsInput } from "../inputs/MainUserUpdateToOneWithWhereWithoutPostsInput";
import { MainUserUpsertWithoutPostsInput } from "../inputs/MainUserUpsertWithoutPostsInput";
import { MainUserWhereUniqueInput } from "../inputs/MainUserWhereUniqueInput";

@InputType("MainUserUpdateOneRequiredWithoutPostsNestedInput", {})
export class MainUserUpdateOneRequiredWithoutPostsNestedInput {
  @Field(_type => MainUserCreateWithoutPostsInput, {
    nullable: true
  })
  create?: MainUserCreateWithoutPostsInput | undefined;

  @Field(_type => MainUserCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: MainUserCreateOrConnectWithoutPostsInput | undefined;

  @Field(_type => MainUserUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: MainUserUpsertWithoutPostsInput | undefined;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  connect?: MainUserWhereUniqueInput | undefined;

  @Field(_type => MainUserUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: MainUserUpdateToOneWithWhereWithoutPostsInput | undefined;
}
