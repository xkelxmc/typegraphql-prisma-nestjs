import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NativeTypeModelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/NativeTypeModelOrderByWithRelationAndSearchRelevanceInput";
import { NativeTypeModelWhereInput } from "../../../inputs/NativeTypeModelWhereInput";
import { NativeTypeModelWhereUniqueInput } from "../../../inputs/NativeTypeModelWhereUniqueInput";

@ArgsType()
export class AggregateNativeTypeModelArgs {
  @Field(_type => NativeTypeModelWhereInput, {
    nullable: true
  })
  where?: NativeTypeModelWhereInput | undefined;

  @Field(_type => [NativeTypeModelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: NativeTypeModelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => NativeTypeModelWhereUniqueInput, {
    nullable: true
  })
  cursor?: NativeTypeModelWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
