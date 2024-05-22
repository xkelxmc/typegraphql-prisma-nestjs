import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@InputType("PostCreateNestedOneWithoutCommentsInput", {})
export class PostCreateNestedOneWithoutCommentsInput {
  @Field(_type => PostCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PostCreateWithoutCommentsInput | undefined;

  @Field(_type => PostCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | undefined;

  @Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
