import { EnumMemberStructure, OptionalKind, Project } from "ts-morph";
import path from "path";

import { generateTypeGraphQLImport } from "./imports";
import { enumsFolderName } from "./config";
import { DMMF } from "./dmmf/types";
import { convertNewLines } from "./helpers";
import { GeneratorOptions } from "./options";

export default function generateEnumFromDef(
  project: Project,
  baseDirPath: string,
  enumDef: DMMF.Enum,
  options: GeneratorOptions,
) {
  const dirPath = path.resolve(baseDirPath, enumsFolderName);
  const filePath = path.resolve(dirPath, `${enumDef.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  generateTypeGraphQLImport(sourceFile);

  sourceFile.addEnum({
    isExported: true,
    name: enumDef.typeName,
    ...(enumDef.docs && {
      docs: [{ description: convertNewLines(enumDef.docs) }],
    }),
    members: enumDef.valuesMap.map<OptionalKind<EnumMemberStructure>>(
      ({ name, value }) => ({
        name,
        value,
        // TODO: add support for string enums (values)
        // TODO: add support for enum members docs
      }),
    ),
  });

  // TODO: refactor to AST
  sourceFile.addStatements([
    `registerEnumType(${enumDef.typeName}, {
      name: "${[options.enumTypePrefix, enumDef.typeName]
        .filter(Boolean)
        .join("")}",
      description: ${enumDef.docs ? `"${enumDef.docs}"` : "undefined"},
    });`,
  ]);
}
