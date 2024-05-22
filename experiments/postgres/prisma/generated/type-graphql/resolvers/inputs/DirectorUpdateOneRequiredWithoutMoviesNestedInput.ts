import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../../global/scalars";
import { DirectorCreateOrConnectWithoutMoviesInput } from "../inputs/DirectorCreateOrConnectWithoutMoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorUpdateToOneWithWhereWithoutMoviesInput } from "../inputs/DirectorUpdateToOneWithWhereWithoutMoviesInput";
import { DirectorUpsertWithoutMoviesInput } from "../inputs/DirectorUpsertWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";

@InputType("DirectorUpdateOneRequiredWithoutMoviesNestedInput", {})
export class DirectorUpdateOneRequiredWithoutMoviesNestedInput {
  @Field(_type => DirectorCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: DirectorCreateWithoutMoviesInput | undefined;

  @Field(_type => DirectorCreateOrConnectWithoutMoviesInput, {
    nullable: true
  })
  connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput | undefined;

  @Field(_type => DirectorUpsertWithoutMoviesInput, {
    nullable: true
  })
  upsert?: DirectorUpsertWithoutMoviesInput | undefined;

  @Field(_type => DirectorWhereUniqueInput, {
    nullable: true
  })
  connect?: DirectorWhereUniqueInput | undefined;

  @Field(_type => DirectorUpdateToOneWithWhereWithoutMoviesInput, {
    nullable: true
  })
  update?: DirectorUpdateToOneWithWhereWithoutMoviesInput | undefined;
}
