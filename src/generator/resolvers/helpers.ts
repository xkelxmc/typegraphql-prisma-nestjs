import { OptionalKind, MethodDeclarationStructure } from "ts-morph";

import { getFieldTSType, getTypeGraphQLType } from "../helpers";
import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";

export function generateCrudResolverClassMethodDeclaration(
  action: DMMF.Action,
  typeName: string,
  dmmfDocument: DmmfDocument,
  mapping: DMMF.Mapping,
): OptionalKind<MethodDeclarationStructure> {
  // TODO: move to DMMF transform step
  const returnTSType = getFieldTSType(
    action.method.outputType,
    dmmfDocument,
    false,
    mapping.model,
    typeName,
  );

  return {
    name: action.name,
    isAsync: true,
    returnType: `Promise<${returnTSType}>`,
    decorators: [
      {
        name: `${action.operation}`,
        arguments: [
          `_returns => ${getTypeGraphQLType(
            action.method.outputType,
            dmmfDocument,
            mapping.model,
            typeName,
          )}`,
          `{
            nullable: ${!action.method.outputType.isRequired},
            description: undefined
          }`,
        ],
      },
    ],
    parameters: [
      {
        name: "ctx",
        // TODO: import custom `ContextType`
        type: "any",
        decorators: [{ name: "Context", arguments: [] }],
      },
      ...(action.kind === "aggregate"
        ? [
            {
              name: "info",
              type: "GraphQLResolveInfo",
              decorators: [{ name: "Info", arguments: [] }],
            },
          ]
        : []),
      ...(!action.argsTypeName
        ? []
        : [
            {
              name: "args",
              type: action.argsTypeName,
              decorators: [{ name: "Args", arguments: [] }],
            },
          ]),
    ],
    statements:
      action.kind === "aggregate"
        ? [
            `function transformFields(fields: Record<string, any>): Record<string, any> {
              return Object.fromEntries(
                Object.entries(fields)
                  .filter(([key, value]) => !key.startsWith("_"))
                  .map<[string, any]>(([key, value]) => {
                    if (Object.keys(value).length === 0) {
                      return [key, true];
                    }
                    return [key, transformFields(value)];
                  }),
              );
            }`,
            `return ctx.prisma.${mapping.collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
          ]
        : [
            `return ctx.prisma.${mapping.collectionName}.${action.kind}(${
              action.argsTypeName ? "args" : ""
            });`,
          ],
  };
}
