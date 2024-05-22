import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CreatorOrderByWithRelationAndSearchRelevanceInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@ArgsType()
export class AggregateCreatorArgs {
  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @Field(_type => [CreatorOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  cursor?: CreatorWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
