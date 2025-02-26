import { EmitBlockKind } from "./emit-block";

export interface ExternalGeneratorOptions {
  globalOutput?: boolean;
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
  emitOnly?: EmitBlockKind[];
  emitRedundantTypesInfo?: boolean;
  customPrismaImportPath?: string;
  customPrismaImportPathIgnoreLevels?: boolean;
  contextPrismaKey?: string;
  useSimpleInputs?: boolean;
  optionalInputFieldsByDefault?: string[];
  omitInputFieldsByDefault?: string[];
  omitOutputFieldsByDefault?: string[];
  formatGeneratedCode?: boolean | "prettier" | "tsc";
  emitIsAbstract?: boolean;
  // custom prefix for ObjectType
  objectTypePrefix?: string;
  // custom prefix for InputType
  inputTypePrefix?: string;
  // custom prefix for Enums
  enumTypePrefix?: string;
}

export interface InternalGeneratorOptions {
  outputDirPath: string;
  prismaClientPath: string;
}

export interface GeneratorOptions
  extends Omit<ExternalGeneratorOptions, "emitOnly" | "contextPrismaKey">,
    InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[];
  contextPrismaKey: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath: string | undefined;
}
