import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DirectorOrderByWithRelationAndSearchRelevanceInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@ArgsType()
export class AggregateDirectorArgs {
  @Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;

  @Field(_type => [DirectorOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  cursor?: DirectorWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
