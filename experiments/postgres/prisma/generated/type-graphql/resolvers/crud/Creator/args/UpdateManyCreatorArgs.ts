import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorUpdateManyMutationInput } from "../../../inputs/CreatorUpdateManyMutationInput";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";

@ArgsType()
export class UpdateManyCreatorArgs {
  @Field(_type => CreatorUpdateManyMutationInput, {
    nullable: false
  })
  data!: CreatorUpdateManyMutationInput;

  @Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;
}
