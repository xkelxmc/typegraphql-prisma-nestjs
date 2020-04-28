import * as TypeGraphQL from "type-graphql";
import { FirstNameLastNameCompoundUniqueInput } from "../inputs/FirstNameLastNameCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereUniqueInput {
  @TypeGraphQL.Field(_type => FirstNameLastNameCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  firstName_lastName?: FirstNameLastNameCompoundUniqueInput | null;
}
