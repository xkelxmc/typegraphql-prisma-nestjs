import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MainUserOrderByWithRelationAndSearchRelevanceInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@ArgsType()
export class AggregateMainUserArgs {
  @Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @Field(_type => [MainUserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MainUserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MainUserWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
