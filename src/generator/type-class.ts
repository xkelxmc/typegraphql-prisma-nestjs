import path from "path";
import {
  GetAccessorDeclarationStructure,
  MethodDeclarationStructure,
  OptionalKind,
  Project,
  PropertyDeclarationStructure,
  SetAccessorDeclarationStructure,
  Writers,
} from "ts-morph";

import { inputsFolderName, outputsFolderName } from "./config";
import { DmmfDocument } from "./dmmf/dmmf-document";
import { DMMF } from "./dmmf/types";
import { pascalCase } from "./helpers";
import {
  generateArgsImports,
  generateCustomScalarsImport,
  generateEnumsImports,
  generateGlobalEnumsImports,
  generateGlobalInputsImports,
  generateGraphQLScalarsImport,
  generateInputsImports,
  generateModelsImports,
  generateOutputsImports,
  generatePrismaNamespaceImport,
  generateTypeGraphQLImport,
} from "./imports";
import { GeneratorOptions } from "./options";

export function generateOutputTypeClassFromType(
  project: Project,
  dirPath: string,
  type: DMMF.OutputType,
  dmmfDocument: DmmfDocument,
  options: GeneratorOptions,
) {
  const fileDirPath = path.resolve(dirPath, outputsFolderName);
  const filePath = path.resolve(fileDirPath, `${type.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });
  const fieldArgsTypeNames = type.fields
    .filter(it => it.argsTypeName)
    .map(it => it.argsTypeName!);

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  generatePrismaNamespaceImport(sourceFile, dmmfDocument.options, 2);
  if (options.globalOutput) {
    generateCustomScalarsImport(sourceFile, 3, true);
  } else {
    generateCustomScalarsImport(sourceFile, 2);
  }
  generateArgsImports(sourceFile, fieldArgsTypeNames, 0);
  generateModelsImports(
    sourceFile,
    type.fields
      .filter(
        field =>
          field.outputType.location === "outputObjectTypes" &&
          field.outputType.namespace === "model",
      )
      .map(field => field.outputType.type),
    2,
  );
  generateOutputsImports(
    sourceFile,
    type.fields
      .filter(
        field =>
          field.outputType.location === "outputObjectTypes" &&
          field.outputType.namespace !== "model",
      )
      .map(field => field.outputType.type),
    1,
  );

  const enums = type.fields
    .map(field => field.outputType)
    .filter(fieldType => fieldType.location === "enumTypes")
    .map(fieldType => fieldType.type);
  if (options.globalOutput) {
    generateGlobalEnumsImports(
      sourceFile,
      enums.filter(type => dmmfDocument.checkIsGlobalEnum(type)),
      3,
    );

    generateEnumsImports(
      sourceFile,
      enums.filter(type => !dmmfDocument.checkIsGlobalEnum(type)),
      2,
    );
  } else {
    generateEnumsImports(sourceFile, enums, 2);
  }

  sourceFile.addClass({
    name: type.typeName,
    isExported: true,
    decorators: [
      {
        name: "ObjectType",
        arguments: [
          `"${[dmmfDocument.options.objectTypePrefix, type.typeName]
            .filter(Boolean)
            .join("")}"`,
          Writers.object({
            ...(dmmfDocument.options.emitIsAbstract && {
              isAbstract: "true",
            }),
            ...(dmmfDocument.options.simpleResolvers && {
              simpleResolvers: "true",
            }),
          }),
        ],
      },
    ],
    properties: [
      ...type.fields
        .filter(field => !field.argsTypeName)
        .map<OptionalKind<PropertyDeclarationStructure>>(field => ({
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: true,
          hasQuestionToken: false,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "Field",
              arguments: [
                `_type => ${field.typeGraphQLType}`,
                Writers.object({
                  nullable: `${!field.isRequired}`,
                }),
              ],
            },
          ],
        })),
      ...type.fields
        .filter(field => field.argsTypeName)
        .map<OptionalKind<PropertyDeclarationStructure>>(field => ({
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: true,
          hasQuestionToken: false,
        })),
    ],
    methods: type.fields
      .filter(field => field.argsTypeName)
      .map<OptionalKind<MethodDeclarationStructure>>(field => ({
        name: `get${pascalCase(field.name)}`,
        returnType: field.fieldTSType,
        trailingTrivia: "\r\n",
        decorators: [
          {
            name: "Field",
            arguments: [
              `_type => ${field.typeGraphQLType}`,
              Writers.object({
                name: `"${field.name}"`,
                nullable: `${!field.isRequired}`,
              }),
            ],
          },
        ],
        parameters: [
          {
            name: "root",
            type: type.typeName,
            decorators: [{ name: "Root", arguments: [] }],
          },
          {
            name: "args",
            type: field.argsTypeName,
            decorators: [{ name: "Args", arguments: [] }],
          },
        ],
        statements: [Writers.returnStatement(`root.${field.name}`)],
      })),
  });
}

export function generateInputTypeClassFromType(
  dmmfDocument: DmmfDocument,
  project: Project,
  dirPath: string,
  inputType: DMMF.InputType,
  options: GeneratorOptions,
) {
  const isGlobalType = inputType.isPrismaGlobalType && options.globalOutput;
  const filePath = path.resolve(
    dirPath,
    inputsFolderName,
    `${inputType.typeName}.ts`,
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  if (!isGlobalType) {
    generatePrismaNamespaceImport(sourceFile, options, 2);
  } else {
    generatePrismaNamespaceImport(sourceFile, options, 1);
  }

  const enums = inputType.fields
    .map(field => field.selectedInputType)
    .filter(fieldType => fieldType.location === "enumTypes")
    .map(fieldType => fieldType.type as string);

  if (options.globalOutput) {
    if (inputType.isPrismaGlobalType) {
      generateEnumsImports(sourceFile, enums, 1);
    } else {
      generateGlobalEnumsImports(
        sourceFile,
        enums.filter(type => dmmfDocument.checkIsGlobalEnum(type)),
        3,
      );

      generateEnumsImports(
        sourceFile,
        enums.filter(type => !dmmfDocument.checkIsGlobalEnum(type)),
        2,
      );
    }
  } else {
    generateEnumsImports(sourceFile, enums, 2);
  }
  if (options.globalOutput) {
    if (inputType.isPrismaGlobalType) {
      generateCustomScalarsImport(sourceFile, 1);
    } else {
      generateCustomScalarsImport(sourceFile, 3, true);
    }
  } else {
    generateCustomScalarsImport(sourceFile, 2);
  }
  if (options.globalOutput && !inputType.isPrismaGlobalType) {
    generateGlobalInputsImports(
      sourceFile,
      inputType.fields
        .filter(
          field => field.selectedInputType.location === "inputObjectTypes",
        )
        .filter(field => field.isGlobalInputType)
        .map(field => field.selectedInputType.type)
        .filter(fieldType => fieldType !== inputType.typeName),
      3,
    );
    generateInputsImports(
      sourceFile,
      inputType.fields
        .filter(
          field => field.selectedInputType.location === "inputObjectTypes",
        )
        .filter(field => !field.isGlobalInputType)
        .map(field => field.selectedInputType.type)
        .filter(fieldType => fieldType !== inputType.typeName),
    );
  } else {
    generateInputsImports(
      sourceFile,
      inputType.fields
        .filter(
          field => field.selectedInputType.location === "inputObjectTypes",
        )
        .map(field => field.selectedInputType.type)
        .filter(fieldType => fieldType !== inputType.typeName),
    );
  }

  const fieldsToEmit = inputType.fields.filter(field => !field.isOmitted);
  const mappedFields = fieldsToEmit.filter(field => field.hasMappedName);

  sourceFile.addClass({
    name: inputType.typeName,
    isExported: true,
    decorators: [
      {
        name: "InputType",
        arguments: [
          `"${[options.inputTypePrefix, inputType.typeName]
            .filter(Boolean)
            .join("")}"`,
          Writers.object({
            ...(options.emitIsAbstract && {
              isAbstract: "true",
            }),
          }),
        ],
      },
    ],
    properties: fieldsToEmit.map<OptionalKind<PropertyDeclarationStructure>>(
      field => {
        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: !!field.isRequired,
          hasQuestionToken: !field.isRequired,
          trailingTrivia: "\r\n",
          decorators: field.hasMappedName
            ? []
            : [
                {
                  name: "Field",
                  arguments: [
                    `_type => ${field.typeGraphQLType}`,
                    Writers.object({
                      nullable: `${!!field.isOptional || !field.isRequired}`,
                    }),
                  ],
                },
              ],
        };
      },
    ),
    getAccessors: mappedFields.map<
      OptionalKind<GetAccessorDeclarationStructure>
    >(field => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.isRequired,
        hasQuestionToken: !field.isRequired,
        trailingTrivia: "\r\n",
        statements: [`return this.${field.name};`],
        decorators: [
          {
            name: "Field",
            arguments: [
              `_type => ${field.typeGraphQLType}`,
              Writers.object({
                nullable: `${!field.isRequired}`,
              }),
            ],
          },
        ],
      };
    }),
    setAccessors: mappedFields.map<
      OptionalKind<SetAccessorDeclarationStructure>
    >(field => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.isRequired,
        hasQuestionToken: !field.isRequired,
        trailingTrivia: "\r\n",
        parameters: [{ name: field.name, type: field.fieldTSType }],
        statements: [`this.${field.name} = ${field.name};`],
      };
    }),
  });
}
