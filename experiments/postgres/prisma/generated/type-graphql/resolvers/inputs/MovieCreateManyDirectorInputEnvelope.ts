import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { MovieCreateManyDirectorInput } from "../inputs/MovieCreateManyDirectorInput";

@InputType("MovieCreateManyDirectorInputEnvelope", {})
export class MovieCreateManyDirectorInputEnvelope {
  @Field(_type => [MovieCreateManyDirectorInput], {
    nullable: false
  })
  data!: MovieCreateManyDirectorInput[];

  @Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
