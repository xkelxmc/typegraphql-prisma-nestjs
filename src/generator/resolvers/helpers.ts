import { OptionalKind, MethodDeclarationStructure, Writers } from "ts-morph";

import { DmmfDocument } from "../dmmf/dmmf-document";
import { DMMF } from "../dmmf/types";

export function generateCrudResolverClassMethodDeclaration(
  action: DMMF.Action,
  mapping: DMMF.ModelMapping,
  dmmfDocument: DmmfDocument,
): OptionalKind<MethodDeclarationStructure> {
  return {
    name: action.name,
    isAsync: true,
    returnType: `Promise<${action.returnTSType}>`,
    decorators: [
      {
        name: `${action.operation}`,
        arguments: [
          `_returns => ${action.typeGraphQLType}`,
          Writers.object({
            nullable: `${!action.method.isRequired}`,
          }),
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
      ...(action.kind === DMMF.ModelAction.aggregate ||
      action.kind === DMMF.ModelAction.groupBy
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
      action.kind === DMMF.ModelAction.aggregate
        ? [
            /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.kind}({
              ...args,
              ...transformFields(graphqlFields(info as any)),
            });`,
          ]
        : action.kind === DMMF.ModelAction.groupBy
        ? [
            /* ts */ ` const { count, avg, sum, min, max } = transformFields(
              graphqlFields(info as any)
            );`,
            /* ts */ ` return getPrismaFromContext(ctx).${mapping.collectionName}.${action.kind}({
              ...args,
              ...Object.fromEntries(
                Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
              ),
            });`,
          ]
        : [
            /* ts */ ` return getPrismaFromContext(ctx).${
              mapping.collectionName
            }.${action.kind}(${action.argsTypeName ? "args" : ""});`,
          ],
  };
}
