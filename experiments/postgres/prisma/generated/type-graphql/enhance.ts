import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  MainUser: crudResolvers.MainUserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  Director: crudResolvers.DirectorCrudResolver,
  Problem: crudResolvers.ProblemCrudResolver,
  Creator: crudResolvers.CreatorCrudResolver,
  NativeTypeModel: crudResolvers.NativeTypeModelCrudResolver,
  Equipment: crudResolvers.EquipmentCrudResolver,
  Hidden: crudResolvers.HiddenCrudResolver
};
const actionResolversMap = {
  MainUser: {
    aggregateMainUser: actionResolvers.AggregateMainUserResolver,
    createManyMainUser: actionResolvers.CreateManyMainUserResolver,
    createOneMainUser: actionResolvers.CreateOneMainUserResolver,
    deleteManyMainUser: actionResolvers.DeleteManyMainUserResolver,
    deleteOneMainUser: actionResolvers.DeleteOneMainUserResolver,
    findFirstMainUser: actionResolvers.FindFirstMainUserResolver,
    findFirstMainUserOrThrow: actionResolvers.FindFirstMainUserOrThrowResolver,
    mainUsers: actionResolvers.FindManyMainUserResolver,
    mainUser: actionResolvers.FindUniqueMainUserResolver,
    getMainUser: actionResolvers.FindUniqueMainUserOrThrowResolver,
    groupByMainUser: actionResolvers.GroupByMainUserResolver,
    updateManyMainUser: actionResolvers.UpdateManyMainUserResolver,
    updateOneMainUser: actionResolvers.UpdateOneMainUserResolver,
    upsertOneMainUser: actionResolvers.UpsertOneMainUserResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
  },
  Patient: {
    aggregatePatient: actionResolvers.AggregatePatientResolver,
    createManyPatient: actionResolvers.CreateManyPatientResolver,
    createOnePatient: actionResolvers.CreateOnePatientResolver,
    deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
    deleteOnePatient: actionResolvers.DeleteOnePatientResolver,
    findFirstPatient: actionResolvers.FindFirstPatientResolver,
    findFirstPatientOrThrow: actionResolvers.FindFirstPatientOrThrowResolver,
    patients: actionResolvers.FindManyPatientResolver,
    patient: actionResolvers.FindUniquePatientResolver,
    getPatient: actionResolvers.FindUniquePatientOrThrowResolver,
    groupByPatient: actionResolvers.GroupByPatientResolver,
    updateManyPatient: actionResolvers.UpdateManyPatientResolver,
    updateOnePatient: actionResolvers.UpdateOnePatientResolver,
    upsertOnePatient: actionResolvers.UpsertOnePatientResolver
  },
  Movie: {
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    createManyMovie: actionResolvers.CreateManyMovieResolver,
    createOneMovie: actionResolvers.CreateOneMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    deleteOneMovie: actionResolvers.DeleteOneMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    findFirstMovieOrThrow: actionResolvers.FindFirstMovieOrThrowResolver,
    movies: actionResolvers.FindManyMovieResolver,
    movie: actionResolvers.FindUniqueMovieResolver,
    getMovie: actionResolvers.FindUniqueMovieOrThrowResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    updateOneMovie: actionResolvers.UpdateOneMovieResolver,
    upsertOneMovie: actionResolvers.UpsertOneMovieResolver
  },
  Director: {
    aggregateDirector: actionResolvers.AggregateDirectorResolver,
    createManyDirector: actionResolvers.CreateManyDirectorResolver,
    createOneDirector: actionResolvers.CreateOneDirectorResolver,
    deleteManyDirector: actionResolvers.DeleteManyDirectorResolver,
    deleteOneDirector: actionResolvers.DeleteOneDirectorResolver,
    findFirstDirector: actionResolvers.FindFirstDirectorResolver,
    findFirstDirectorOrThrow: actionResolvers.FindFirstDirectorOrThrowResolver,
    directors: actionResolvers.FindManyDirectorResolver,
    director: actionResolvers.FindUniqueDirectorResolver,
    getDirector: actionResolvers.FindUniqueDirectorOrThrowResolver,
    groupByDirector: actionResolvers.GroupByDirectorResolver,
    updateManyDirector: actionResolvers.UpdateManyDirectorResolver,
    updateOneDirector: actionResolvers.UpdateOneDirectorResolver,
    upsertOneDirector: actionResolvers.UpsertOneDirectorResolver
  },
  Problem: {
    aggregateProblem: actionResolvers.AggregateProblemResolver,
    createManyProblem: actionResolvers.CreateManyProblemResolver,
    createOneProblem: actionResolvers.CreateOneProblemResolver,
    deleteManyProblem: actionResolvers.DeleteManyProblemResolver,
    deleteOneProblem: actionResolvers.DeleteOneProblemResolver,
    findFirstProblem: actionResolvers.FindFirstProblemResolver,
    findFirstProblemOrThrow: actionResolvers.FindFirstProblemOrThrowResolver,
    problems: actionResolvers.FindManyProblemResolver,
    problem: actionResolvers.FindUniqueProblemResolver,
    getProblem: actionResolvers.FindUniqueProblemOrThrowResolver,
    groupByProblem: actionResolvers.GroupByProblemResolver,
    updateManyProblem: actionResolvers.UpdateManyProblemResolver,
    updateOneProblem: actionResolvers.UpdateOneProblemResolver,
    upsertOneProblem: actionResolvers.UpsertOneProblemResolver
  },
  Creator: {
    aggregateCreator: actionResolvers.AggregateCreatorResolver,
    createManyCreator: actionResolvers.CreateManyCreatorResolver,
    createOneCreator: actionResolvers.CreateOneCreatorResolver,
    deleteManyCreator: actionResolvers.DeleteManyCreatorResolver,
    deleteOneCreator: actionResolvers.DeleteOneCreatorResolver,
    findFirstCreator: actionResolvers.FindFirstCreatorResolver,
    findFirstCreatorOrThrow: actionResolvers.FindFirstCreatorOrThrowResolver,
    creators: actionResolvers.FindManyCreatorResolver,
    creator: actionResolvers.FindUniqueCreatorResolver,
    getCreator: actionResolvers.FindUniqueCreatorOrThrowResolver,
    groupByCreator: actionResolvers.GroupByCreatorResolver,
    updateManyCreator: actionResolvers.UpdateManyCreatorResolver,
    updateOneCreator: actionResolvers.UpdateOneCreatorResolver,
    upsertOneCreator: actionResolvers.UpsertOneCreatorResolver
  },
  NativeTypeModel: {
    aggregateNativeTypeModel: actionResolvers.AggregateNativeTypeModelResolver,
    createManyNativeTypeModel: actionResolvers.CreateManyNativeTypeModelResolver,
    createOneNativeTypeModel: actionResolvers.CreateOneNativeTypeModelResolver,
    deleteManyNativeTypeModel: actionResolvers.DeleteManyNativeTypeModelResolver,
    deleteOneNativeTypeModel: actionResolvers.DeleteOneNativeTypeModelResolver,
    findFirstNativeTypeModel: actionResolvers.FindFirstNativeTypeModelResolver,
    findFirstNativeTypeModelOrThrow: actionResolvers.FindFirstNativeTypeModelOrThrowResolver,
    nativeTypeModels: actionResolvers.FindManyNativeTypeModelResolver,
    nativeTypeModel: actionResolvers.FindUniqueNativeTypeModelResolver,
    getNativeTypeModel: actionResolvers.FindUniqueNativeTypeModelOrThrowResolver,
    groupByNativeTypeModel: actionResolvers.GroupByNativeTypeModelResolver,
    updateManyNativeTypeModel: actionResolvers.UpdateManyNativeTypeModelResolver,
    updateOneNativeTypeModel: actionResolvers.UpdateOneNativeTypeModelResolver,
    upsertOneNativeTypeModel: actionResolvers.UpsertOneNativeTypeModelResolver
  },
  Equipment: {
    aggregateEquipment: actionResolvers.AggregateEquipmentResolver,
    createManyEquipment: actionResolvers.CreateManyEquipmentResolver,
    createOneEquipment: actionResolvers.CreateOneEquipmentResolver,
    deleteManyEquipment: actionResolvers.DeleteManyEquipmentResolver,
    deleteOneEquipment: actionResolvers.DeleteOneEquipmentResolver,
    findFirstEquipment: actionResolvers.FindFirstEquipmentResolver,
    findFirstEquipmentOrThrow: actionResolvers.FindFirstEquipmentOrThrowResolver,
    equipments: actionResolvers.FindManyEquipmentResolver,
    equipment: actionResolvers.FindUniqueEquipmentResolver,
    getEquipment: actionResolvers.FindUniqueEquipmentOrThrowResolver,
    groupByEquipment: actionResolvers.GroupByEquipmentResolver,
    updateManyEquipment: actionResolvers.UpdateManyEquipmentResolver,
    updateOneEquipment: actionResolvers.UpdateOneEquipmentResolver,
    upsertOneEquipment: actionResolvers.UpsertOneEquipmentResolver
  },
  Hidden: {
    aggregateHidden: actionResolvers.AggregateHiddenResolver,
    createManyHidden: actionResolvers.CreateManyHiddenResolver,
    createOneHidden: actionResolvers.CreateOneHiddenResolver,
    deleteManyHidden: actionResolvers.DeleteManyHiddenResolver,
    deleteOneHidden: actionResolvers.DeleteOneHiddenResolver,
    findFirstHidden: actionResolvers.FindFirstHiddenResolver,
    findFirstHiddenOrThrow: actionResolvers.FindFirstHiddenOrThrowResolver,
    hiddens: actionResolvers.FindManyHiddenResolver,
    hidden: actionResolvers.FindUniqueHiddenResolver,
    getHidden: actionResolvers.FindUniqueHiddenOrThrowResolver,
    groupByHidden: actionResolvers.GroupByHiddenResolver,
    updateManyHidden: actionResolvers.UpdateManyHiddenResolver,
    updateOneHidden: actionResolvers.UpdateOneHiddenResolver,
    upsertOneHidden: actionResolvers.UpsertOneHiddenResolver
  }
};
const crudResolversInfo = {
  MainUser: ["aggregateMainUser", "createManyMainUser", "createOneMainUser", "deleteManyMainUser", "deleteOneMainUser", "findFirstMainUser", "findFirstMainUserOrThrow", "mainUsers", "mainUser", "getMainUser", "groupByMainUser", "updateManyMainUser", "updateOneMainUser", "upsertOneMainUser"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  Patient: ["aggregatePatient", "createManyPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
  Movie: ["aggregateMovie", "createManyMovie", "createOneMovie", "deleteManyMovie", "deleteOneMovie", "findFirstMovie", "findFirstMovieOrThrow", "movies", "movie", "getMovie", "groupByMovie", "updateManyMovie", "updateOneMovie", "upsertOneMovie"],
  Director: ["aggregateDirector", "createManyDirector", "createOneDirector", "deleteManyDirector", "deleteOneDirector", "findFirstDirector", "findFirstDirectorOrThrow", "directors", "director", "getDirector", "groupByDirector", "updateManyDirector", "updateOneDirector", "upsertOneDirector"],
  Problem: ["aggregateProblem", "createManyProblem", "createOneProblem", "deleteManyProblem", "deleteOneProblem", "findFirstProblem", "findFirstProblemOrThrow", "problems", "problem", "getProblem", "groupByProblem", "updateManyProblem", "updateOneProblem", "upsertOneProblem"],
  Creator: ["aggregateCreator", "createManyCreator", "createOneCreator", "deleteManyCreator", "deleteOneCreator", "findFirstCreator", "findFirstCreatorOrThrow", "creators", "creator", "getCreator", "groupByCreator", "updateManyCreator", "updateOneCreator", "upsertOneCreator"],
  NativeTypeModel: ["aggregateNativeTypeModel", "createManyNativeTypeModel", "createOneNativeTypeModel", "deleteManyNativeTypeModel", "deleteOneNativeTypeModel", "findFirstNativeTypeModel", "findFirstNativeTypeModelOrThrow", "nativeTypeModels", "nativeTypeModel", "getNativeTypeModel", "groupByNativeTypeModel", "updateManyNativeTypeModel", "updateOneNativeTypeModel", "upsertOneNativeTypeModel"],
  Equipment: ["aggregateEquipment", "createManyEquipment", "createOneEquipment", "deleteManyEquipment", "deleteOneEquipment", "findFirstEquipment", "findFirstEquipmentOrThrow", "equipments", "equipment", "getEquipment", "groupByEquipment", "updateManyEquipment", "updateOneEquipment", "upsertOneEquipment"],
  Hidden: ["aggregateHidden", "createManyHidden", "createOneHidden", "deleteManyHidden", "deleteOneHidden", "findFirstHidden", "findFirstHiddenOrThrow", "hiddens", "hidden", "getHidden", "groupByHidden", "updateManyHidden", "updateOneHidden", "upsertOneHidden"]
};
const argsInfo = {
  AggregateMainUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMainUserArgs: ["data", "skipDuplicates"],
  CreateOneMainUserArgs: ["data"],
  DeleteManyMainUserArgs: ["where"],
  DeleteOneMainUserArgs: ["where"],
  FindFirstMainUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMainUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMainUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMainUserArgs: ["where"],
  FindUniqueMainUserOrThrowArgs: ["where"],
  GroupByMainUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMainUserArgs: ["data", "where"],
  UpdateOneMainUserArgs: ["data", "where"],
  UpsertOneMainUserArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  CreateOneCategoryArgs: ["data"],
  DeleteManyCategoryArgs: ["where"],
  DeleteOneCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoryArgs: ["where"],
  FindUniqueCategoryOrThrowArgs: ["where"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpdateOneCategoryArgs: ["data", "where"],
  UpsertOneCategoryArgs: ["where", "create", "update"],
  AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPatientArgs: ["data", "skipDuplicates"],
  CreateOnePatientArgs: ["data"],
  DeleteManyPatientArgs: ["where"],
  DeleteOnePatientArgs: ["where"],
  FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPatientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePatientArgs: ["where"],
  FindUniquePatientOrThrowArgs: ["where"],
  GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPatientArgs: ["data", "where"],
  UpdateOnePatientArgs: ["data", "where"],
  UpsertOnePatientArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieArgs: ["data", "skipDuplicates"],
  CreateOneMovieArgs: ["data"],
  DeleteManyMovieArgs: ["where"],
  DeleteOneMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieArgs: ["where"],
  FindUniqueMovieOrThrowArgs: ["where"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieArgs: ["data", "where"],
  UpdateOneMovieArgs: ["data", "where"],
  UpsertOneMovieArgs: ["where", "create", "update"],
  AggregateDirectorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyDirectorArgs: ["data", "skipDuplicates"],
  CreateOneDirectorArgs: ["data"],
  DeleteManyDirectorArgs: ["where"],
  DeleteOneDirectorArgs: ["where"],
  FindFirstDirectorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstDirectorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDirectorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDirectorArgs: ["where"],
  FindUniqueDirectorOrThrowArgs: ["where"],
  GroupByDirectorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDirectorArgs: ["data", "where"],
  UpdateOneDirectorArgs: ["data", "where"],
  UpsertOneDirectorArgs: ["where", "create", "update"],
  AggregateProblemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProblemArgs: ["data", "skipDuplicates"],
  CreateOneProblemArgs: ["data"],
  DeleteManyProblemArgs: ["where"],
  DeleteOneProblemArgs: ["where"],
  FindFirstProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProblemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProblemArgs: ["where"],
  FindUniqueProblemOrThrowArgs: ["where"],
  GroupByProblemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProblemArgs: ["data", "where"],
  UpdateOneProblemArgs: ["data", "where"],
  UpsertOneProblemArgs: ["where", "create", "update"],
  AggregateCreatorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCreatorArgs: ["data", "skipDuplicates"],
  CreateOneCreatorArgs: ["data"],
  DeleteManyCreatorArgs: ["where"],
  DeleteOneCreatorArgs: ["where"],
  FindFirstCreatorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCreatorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCreatorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCreatorArgs: ["where"],
  FindUniqueCreatorOrThrowArgs: ["where"],
  GroupByCreatorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCreatorArgs: ["data", "where"],
  UpdateOneCreatorArgs: ["data", "where"],
  UpsertOneCreatorArgs: ["where", "create", "update"],
  AggregateNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNativeTypeModelArgs: ["data", "skipDuplicates"],
  CreateOneNativeTypeModelArgs: ["data"],
  DeleteManyNativeTypeModelArgs: ["where"],
  DeleteOneNativeTypeModelArgs: ["where"],
  FindFirstNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNativeTypeModelOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNativeTypeModelArgs: ["where"],
  FindUniqueNativeTypeModelOrThrowArgs: ["where"],
  GroupByNativeTypeModelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNativeTypeModelArgs: ["data", "where"],
  UpdateOneNativeTypeModelArgs: ["data", "where"],
  UpsertOneNativeTypeModelArgs: ["where", "create", "update"],
  AggregateEquipmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEquipmentArgs: ["data", "skipDuplicates"],
  CreateOneEquipmentArgs: ["data"],
  DeleteManyEquipmentArgs: ["where"],
  DeleteOneEquipmentArgs: ["where"],
  FindFirstEquipmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEquipmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEquipmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEquipmentArgs: ["where"],
  FindUniqueEquipmentOrThrowArgs: ["where"],
  GroupByEquipmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEquipmentArgs: ["data", "where"],
  UpdateOneEquipmentArgs: ["data", "where"],
  UpsertOneEquipmentArgs: ["where", "create", "update"],
  AggregateHiddenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyHiddenArgs: ["data", "skipDuplicates"],
  CreateOneHiddenArgs: ["data"],
  DeleteManyHiddenArgs: ["where"],
  DeleteOneHiddenArgs: ["where"],
  FindFirstHiddenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstHiddenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyHiddenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueHiddenArgs: ["where"],
  FindUniqueHiddenOrThrowArgs: ["where"],
  GroupByHiddenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyHiddenArgs: ["data", "where"],
  UpdateOneHiddenArgs: ["data", "where"],
  UpsertOneHiddenArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  MainUser: relationResolvers.MainUserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  Director: relationResolvers.DirectorRelationsResolver,
  Problem: relationResolvers.ProblemRelationsResolver,
  Creator: relationResolvers.CreatorRelationsResolver
};
const relationResolversInfo = {
  MainUser: ["posts"],
  Post: ["author"],
  Movie: ["director"],
  Director: ["movies"],
  Problem: ["likedBy", "creator"],
  Creator: ["likes", "problems"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

export const modelsInfo = {
  MainUser: ["id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases"],
  Post: ["uuid", "createdAt", "updatedAt", "published", "title", "content", "authorId", "kind", "metadata"],
  Category: ["name", "slug", "number"],
  Patient: ["firstName", "lastName", "email"],
  Movie: ["directorFirstName", "directorLastName", "title"],
  Director: ["firstName", "lastName"],
  Problem: ["id", "problemText", "creatorId"],
  Creator: ["id", "name"],
  NativeTypeModel: ["id", "bigInt", "byteA", "decimal"],
  Equipment: ["id", "name"],
  Hidden: ["id", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMainUser: ["_count", "_avg", "_sum", "_min", "_max"],
  MainUserGroupBy: ["id", "email", "name", "age", "balance", "amount", "role", "grades", "aliases", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryGroupBy: ["name", "slug", "number", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePatient: ["_count", "_min", "_max"],
  PatientGroupBy: ["firstName", "lastName", "email", "_count", "_min", "_max"],
  AggregateMovie: ["_count", "_min", "_max"],
  MovieGroupBy: ["directorFirstName", "directorLastName", "title", "_count", "_min", "_max"],
  AggregateDirector: ["_count", "_min", "_max"],
  DirectorGroupBy: ["firstName", "lastName", "_count", "_min", "_max"],
  AggregateProblem: ["_count", "_avg", "_sum", "_min", "_max"],
  ProblemGroupBy: ["id", "problemText", "creatorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCreator: ["_count", "_avg", "_sum", "_min", "_max"],
  CreatorGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNativeTypeModel: ["_count", "_avg", "_sum", "_min", "_max"],
  NativeTypeModelGroupBy: ["id", "bigInt", "byteA", "decimal", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEquipment: ["_count", "_min", "_max"],
  EquipmentGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateHidden: ["_count", "_min", "_max"],
  HiddenGroupBy: ["id", "name", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  MainUserCount: ["posts", "editorPosts"],
  MainUserCountAggregate: ["id", "email", "name", "age", "balance", "amount", "role", "grades", "aliases", "_all"],
  MainUserAvgAggregate: ["id", "age", "balance", "amount", "grades"],
  MainUserSumAggregate: ["id", "age", "balance", "amount", "grades"],
  MainUserMinAggregate: ["id", "email", "name", "age", "balance", "amount", "role"],
  MainUserMaxAggregate: ["id", "email", "name", "age", "balance", "amount", "role"],
  PostCountAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "_all"],
  PostAvgAggregate: ["authorId", "editorId"],
  PostSumAggregate: ["authorId", "editorId"],
  PostMinAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  PostMaxAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  CategoryCountAggregate: ["name", "slug", "number", "_all"],
  CategoryAvgAggregate: ["number"],
  CategorySumAggregate: ["number"],
  CategoryMinAggregate: ["name", "slug", "number"],
  CategoryMaxAggregate: ["name", "slug", "number"],
  PatientCountAggregate: ["firstName", "lastName", "email", "_all"],
  PatientMinAggregate: ["firstName", "lastName", "email"],
  PatientMaxAggregate: ["firstName", "lastName", "email"],
  MovieCountAggregate: ["directorFirstName", "directorLastName", "title", "_all"],
  MovieMinAggregate: ["directorFirstName", "directorLastName", "title"],
  MovieMaxAggregate: ["directorFirstName", "directorLastName", "title"],
  DirectorCount: ["movies"],
  DirectorCountAggregate: ["firstName", "lastName", "_all"],
  DirectorMinAggregate: ["firstName", "lastName"],
  DirectorMaxAggregate: ["firstName", "lastName"],
  ProblemCount: ["likedBy"],
  ProblemCountAggregate: ["id", "problemText", "creatorId", "_all"],
  ProblemAvgAggregate: ["id", "creatorId"],
  ProblemSumAggregate: ["id", "creatorId"],
  ProblemMinAggregate: ["id", "problemText", "creatorId"],
  ProblemMaxAggregate: ["id", "problemText", "creatorId"],
  CreatorCount: ["likes", "problems"],
  CreatorCountAggregate: ["id", "name", "_all"],
  CreatorAvgAggregate: ["id"],
  CreatorSumAggregate: ["id"],
  CreatorMinAggregate: ["id", "name"],
  CreatorMaxAggregate: ["id", "name"],
  NativeTypeModelCountAggregate: ["id", "bigInt", "byteA", "decimal", "_all"],
  NativeTypeModelAvgAggregate: ["id", "bigInt", "decimal"],
  NativeTypeModelSumAggregate: ["id", "bigInt", "decimal"],
  NativeTypeModelMinAggregate: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelMaxAggregate: ["id", "bigInt", "byteA", "decimal"],
  EquipmentCountAggregate: ["id", "name", "_all"],
  EquipmentMinAggregate: ["id", "name"],
  EquipmentMaxAggregate: ["id", "name"],
  HiddenCountAggregate: ["id", "name", "_all"],
  HiddenMinAggregate: ["id", "name"],
  HiddenMaxAggregate: ["id", "name"],
  CreateManyUserAndReturnOutputType: ["id", "email", "name", "age", "balance", "amount", "role", "grades", "aliases"],
  CreateManypostAndReturnOutputType: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "author", "editor"],
  CreateManyCategoryAndReturnOutputType: ["name", "slug", "number"],
  CreateManyPatientAndReturnOutputType: ["firstName", "lastName", "email"],
  CreateManyMovieAndReturnOutputType: ["directorFirstName", "directorLastName", "title", "director"],
  CreateManyDirectorAndReturnOutputType: ["firstName", "lastName"],
  CreateManyProblemAndReturnOutputType: ["id", "problemText", "creatorId", "creator"],
  CreateManyCreatorAndReturnOutputType: ["id", "name"],
  CreateManyNativeTypeModelAndReturnOutputType: ["id", "bigInt", "byteA", "decimal"],
  CreateManyEquipmentAndReturnOutputType: ["id", "name"],
  CreateManyHiddenAndReturnOutputType: ["id", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MainUserWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts", "editorPosts"],
  MainUserOrderByWithRelationAndSearchRelevanceInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts", "editorPosts", "_relevance"],
  MainUserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts", "editorPosts"],
  MainUserOrderByWithAggregationInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "_count", "_avg", "_max", "_min", "_sum"],
  MainUserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases"],
  PostWhereInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "author", "editor"],
  PostOrderByWithRelationAndSearchRelevanceInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "author", "editor", "_relevance"],
  PostWhereUniqueInput: ["uuid", "AND", "OR", "NOT", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "author", "editor"],
  PostOrderByWithAggregationInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  CategoryWhereInput: ["AND", "OR", "NOT", "name", "slug", "number"],
  CategoryOrderByWithRelationAndSearchRelevanceInput: ["name", "slug", "number", "_relevance"],
  CategoryWhereUniqueInput: ["categoryCompoundUnique", "AND", "OR", "NOT", "name", "slug", "number"],
  CategoryOrderByWithAggregationInput: ["name", "slug", "number", "_count", "_avg", "_max", "_min", "_sum"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name", "slug", "number"],
  PatientWhereInput: ["AND", "OR", "NOT", "firstName", "lastName", "email"],
  PatientOrderByWithRelationAndSearchRelevanceInput: ["firstName", "lastName", "email", "_relevance"],
  PatientWhereUniqueInput: ["firstName_lastName", "AND", "OR", "NOT", "firstName", "lastName", "email"],
  PatientOrderByWithAggregationInput: ["firstName", "lastName", "email", "_count", "_max", "_min"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "firstName", "lastName", "email"],
  MovieWhereInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "title", "director"],
  MovieOrderByWithRelationAndSearchRelevanceInput: ["directorFirstName", "directorLastName", "title", "director", "_relevance"],
  MovieWhereUniqueInput: ["movieCompoundId", "AND", "OR", "NOT", "directorFirstName", "directorLastName", "title", "director"],
  MovieOrderByWithAggregationInput: ["directorFirstName", "directorLastName", "title", "_count", "_max", "_min"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "title"],
  DirectorWhereInput: ["AND", "OR", "NOT", "firstName", "lastName", "movies"],
  DirectorOrderByWithRelationAndSearchRelevanceInput: ["firstName", "lastName", "movies", "_relevance"],
  DirectorWhereUniqueInput: ["firstName_lastName", "AND", "OR", "NOT", "firstName", "lastName", "movies"],
  DirectorOrderByWithAggregationInput: ["firstName", "lastName", "_count", "_max", "_min"],
  DirectorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "firstName", "lastName"],
  ProblemWhereInput: ["AND", "OR", "NOT", "id", "problemText", "creatorId", "likedBy", "creator"],
  ProblemOrderByWithRelationAndSearchRelevanceInput: ["id", "problemText", "creatorId", "likedBy", "creator", "_relevance"],
  ProblemWhereUniqueInput: ["id", "AND", "OR", "NOT", "problemText", "creatorId", "likedBy", "creator"],
  ProblemOrderByWithAggregationInput: ["id", "problemText", "creatorId", "_count", "_avg", "_max", "_min", "_sum"],
  ProblemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "problemText", "creatorId"],
  CreatorWhereInput: ["AND", "OR", "NOT", "id", "name", "likes", "problems"],
  CreatorOrderByWithRelationAndSearchRelevanceInput: ["id", "name", "likes", "problems", "_relevance"],
  CreatorWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "likes", "problems"],
  CreatorOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  CreatorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  NativeTypeModelWhereInput: ["AND", "OR", "NOT", "id", "bigInt", "byteA", "decimal"],
  NativeTypeModelOrderByWithRelationAndSearchRelevanceInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelWhereUniqueInput: ["id", "AND", "OR", "NOT", "bigInt", "byteA", "decimal"],
  NativeTypeModelOrderByWithAggregationInput: ["id", "bigInt", "byteA", "decimal", "_count", "_avg", "_max", "_min", "_sum"],
  NativeTypeModelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bigInt", "byteA", "decimal"],
  EquipmentWhereInput: ["AND", "OR", "NOT", "id", "name"],
  EquipmentOrderByWithRelationAndSearchRelevanceInput: ["id", "name", "_relevance"],
  EquipmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "name"],
  EquipmentOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  EquipmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  HiddenWhereInput: ["AND", "OR", "NOT", "id", "name"],
  HiddenOrderByWithRelationAndSearchRelevanceInput: ["id", "name", "_relevance"],
  HiddenWhereUniqueInput: ["id", "AND", "OR", "NOT", "name"],
  HiddenOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  HiddenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  MainUserCreateInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts", "editorPosts"],
  MainUserUpdateInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts", "editorPosts"],
  MainUserCreateManyInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases"],
  MainUserUpdateManyMutationInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases"],
  PostCreateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author", "editor"],
  PostUpdateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author", "editor"],
  PostCreateManyInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  PostUpdateManyMutationInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata"],
  CategoryCreateInput: ["name", "slug", "number"],
  CategoryUpdateInput: ["name", "slug", "number"],
  CategoryCreateManyInput: ["name", "slug", "number"],
  CategoryUpdateManyMutationInput: ["name", "slug", "number"],
  PatientCreateInput: ["firstName", "lastName", "email"],
  PatientUpdateInput: ["firstName", "lastName", "email"],
  PatientCreateManyInput: ["firstName", "lastName", "email"],
  PatientUpdateManyMutationInput: ["firstName", "lastName", "email"],
  MovieCreateInput: ["title", "director"],
  MovieUpdateInput: ["title", "director"],
  MovieCreateManyInput: ["directorFirstName", "directorLastName", "title"],
  MovieUpdateManyMutationInput: ["title"],
  DirectorCreateInput: ["firstName", "lastName", "movies"],
  DirectorUpdateInput: ["firstName", "lastName", "movies"],
  DirectorCreateManyInput: ["firstName", "lastName"],
  DirectorUpdateManyMutationInput: ["firstName", "lastName"],
  ProblemCreateInput: ["problemText", "likedBy", "creator"],
  ProblemUpdateInput: ["problemText", "likedBy", "creator"],
  ProblemCreateManyInput: ["id", "problemText", "creatorId"],
  ProblemUpdateManyMutationInput: ["problemText"],
  CreatorCreateInput: ["name", "likes", "problems"],
  CreatorUpdateInput: ["name", "likes", "problems"],
  CreatorCreateManyInput: ["id", "name"],
  CreatorUpdateManyMutationInput: ["name"],
  NativeTypeModelCreateInput: ["bigInt", "byteA", "decimal"],
  NativeTypeModelUpdateInput: ["bigInt", "byteA", "decimal"],
  NativeTypeModelCreateManyInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelUpdateManyMutationInput: ["bigInt", "byteA", "decimal"],
  EquipmentCreateInput: ["id", "name"],
  EquipmentUpdateInput: ["id", "name"],
  EquipmentCreateManyInput: ["id", "name"],
  EquipmentUpdateManyMutationInput: ["id", "name"],
  HiddenCreateInput: ["id", "name"],
  HiddenUpdateInput: ["id", "name"],
  HiddenCreateManyInput: ["id", "name"],
  HiddenUpdateManyMutationInput: ["id", "name"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  IntNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  PostListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  PostOrderByRelationAggregateInput: ["_count"],
  MainUserOrderByRelevanceInput: ["fields", "sort", "search"],
  MainUserCountOrderByAggregateInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases"],
  MainUserAvgOrderByAggregateInput: ["id", "age", "accountBalance", "amount", "grades"],
  MainUserMaxOrderByAggregateInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  MainUserMinOrderByAggregateInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  MainUserSumOrderByAggregateInput: ["id", "age", "accountBalance", "amount", "grades"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not", "_count", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumPostKindNullableFilter: ["equals", "in", "notIn", "not"],
  JsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  MainUserRelationFilter: ["is", "isNot"],
  UserNullableRelationFilter: ["is", "isNot"],
  PostOrderByRelevanceInput: ["fields", "sort", "search"],
  PostCountOrderByAggregateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  PostAvgOrderByAggregateInput: ["authorId", "editorId"],
  PostMaxOrderByAggregateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  PostMinOrderByAggregateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  PostSumOrderByAggregateInput: ["authorId", "editorId"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumPostKindNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  CategoryOrderByRelevanceInput: ["fields", "sort", "search"],
  CategoryCategoryCompoundUniqueCompoundUniqueInput: ["slug", "number"],
  CategoryCountOrderByAggregateInput: ["name", "slug", "number"],
  CategoryAvgOrderByAggregateInput: ["number"],
  CategoryMaxOrderByAggregateInput: ["name", "slug", "number"],
  CategoryMinOrderByAggregateInput: ["name", "slug", "number"],
  CategorySumOrderByAggregateInput: ["number"],
  PatientOrderByRelevanceInput: ["fields", "sort", "search"],
  PatientFirstNameLastNameCompoundUniqueInput: ["firstName", "lastName"],
  PatientCountOrderByAggregateInput: ["firstName", "lastName", "email"],
  PatientMaxOrderByAggregateInput: ["firstName", "lastName", "email"],
  PatientMinOrderByAggregateInput: ["firstName", "lastName", "email"],
  DirectorRelationFilter: ["is", "isNot"],
  MovieOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieMovieCompoundIdCompoundUniqueInput: ["directorFirstName", "directorLastName", "title"],
  MovieCountOrderByAggregateInput: ["directorFirstName", "directorLastName", "title"],
  MovieMaxOrderByAggregateInput: ["directorFirstName", "directorLastName", "title"],
  MovieMinOrderByAggregateInput: ["directorFirstName", "directorLastName", "title"],
  MovieListRelationFilter: ["every", "some", "none"],
  MovieOrderByRelationAggregateInput: ["_count"],
  DirectorOrderByRelevanceInput: ["fields", "sort", "search"],
  DirectorFirstNameLastNameCompoundUniqueInput: ["firstName", "lastName"],
  DirectorCountOrderByAggregateInput: ["firstName", "lastName"],
  DirectorMaxOrderByAggregateInput: ["firstName", "lastName"],
  DirectorMinOrderByAggregateInput: ["firstName", "lastName"],
  CreatorListRelationFilter: ["every", "some", "none"],
  CreatorNullableRelationFilter: ["is", "isNot"],
  CreatorOrderByRelationAggregateInput: ["_count"],
  ProblemOrderByRelevanceInput: ["fields", "sort", "search"],
  ProblemCountOrderByAggregateInput: ["id", "problemText", "creatorId"],
  ProblemAvgOrderByAggregateInput: ["id", "creatorId"],
  ProblemMaxOrderByAggregateInput: ["id", "problemText", "creatorId"],
  ProblemMinOrderByAggregateInput: ["id", "problemText", "creatorId"],
  ProblemSumOrderByAggregateInput: ["id", "creatorId"],
  ProblemListRelationFilter: ["every", "some", "none"],
  ProblemOrderByRelationAggregateInput: ["_count"],
  CreatorOrderByRelevanceInput: ["fields", "sort", "search"],
  CreatorCountOrderByAggregateInput: ["id", "name"],
  CreatorAvgOrderByAggregateInput: ["id"],
  CreatorMaxOrderByAggregateInput: ["id", "name"],
  CreatorMinOrderByAggregateInput: ["id", "name"],
  CreatorSumOrderByAggregateInput: ["id"],
  BigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BytesNullableFilter: ["equals", "in", "notIn", "not"],
  DecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NativeTypeModelCountOrderByAggregateInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelAvgOrderByAggregateInput: ["id", "bigInt", "decimal"],
  NativeTypeModelMaxOrderByAggregateInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelMinOrderByAggregateInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelSumOrderByAggregateInput: ["id", "bigInt", "decimal"],
  BigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BytesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EquipmentOrderByRelevanceInput: ["fields", "sort", "search"],
  EquipmentCountOrderByAggregateInput: ["id", "name"],
  EquipmentMaxOrderByAggregateInput: ["id", "name"],
  EquipmentMinOrderByAggregateInput: ["id", "name"],
  HiddenOrderByRelevanceInput: ["fields", "sort", "search"],
  HiddenCountOrderByAggregateInput: ["id", "name"],
  HiddenMaxOrderByAggregateInput: ["id", "name"],
  HiddenMinOrderByAggregateInput: ["id", "name"],
  MainUserCreategradesInput: ["set"],
  MainUserCreatealiasesInput: ["set"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutEditorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  MainUserUpdategradesInput: ["set", "push"],
  MainUserUpdatealiasesInput: ["set", "push"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutEditorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MainUserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  MainUserCreateNestedOneWithoutEditorPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableEnumPostKindFieldUpdateOperationsInput: ["set"],
  MainUserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MainUserUpdateOneWithoutEditorPostsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DirectorCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  DirectorUpdateOneRequiredWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCreateNestedManyWithoutDirectorInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieUpdateManyWithoutDirectorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CreatorCreateNestedManyWithoutLikesInput: ["create", "connectOrCreate", "connect"],
  CreatorCreateNestedOneWithoutProblemsInput: ["create", "connectOrCreate", "connect"],
  CreatorUpdateManyWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CreatorUpdateOneWithoutProblemsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProblemCreateNestedManyWithoutLikedByInput: ["create", "connectOrCreate", "connect"],
  ProblemCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProblemUpdateManyWithoutLikedByNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProblemUpdateManyWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableBigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableBytesFieldUpdateOperationsInput: ["set"],
  NullableDecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumPostKindNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumPostKindNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBytesNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBytesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PostCreateWithoutAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "editor"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author"],
  PostCreateOrConnectWithoutEditorInput: ["where", "create"],
  PostCreateManyEditorInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  PostUpsertWithWhereUniqueWithoutEditorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutEditorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutEditorInput: ["where", "data"],
  MainUserCreateWithoutPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "editorPosts"],
  MainUserCreateOrConnectWithoutPostsInput: ["where", "create"],
  MainUserCreateWithoutEditorPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts"],
  MainUserCreateOrConnectWithoutEditorPostsInput: ["where", "create"],
  MainUserUpsertWithoutPostsInput: ["update", "create", "where"],
  MainUserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
  MainUserUpdateWithoutPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "editorPosts"],
  MainUserUpsertWithoutEditorPostsInput: ["update", "create", "where"],
  MainUserUpdateToOneWithWhereWithoutEditorPostsInput: ["where", "data"],
  MainUserUpdateWithoutEditorPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "grades", "aliases", "clientPosts"],
  DirectorCreateWithoutMoviesInput: ["firstName", "lastName"],
  DirectorCreateOrConnectWithoutMoviesInput: ["where", "create"],
  DirectorUpsertWithoutMoviesInput: ["update", "create", "where"],
  DirectorUpdateToOneWithWhereWithoutMoviesInput: ["where", "data"],
  DirectorUpdateWithoutMoviesInput: ["firstName", "lastName"],
  MovieCreateWithoutDirectorInput: ["title"],
  MovieCreateOrConnectWithoutDirectorInput: ["where", "create"],
  MovieCreateManyDirectorInputEnvelope: ["data", "skipDuplicates"],
  MovieUpsertWithWhereUniqueWithoutDirectorInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutDirectorInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutDirectorInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "title"],
  CreatorCreateWithoutLikesInput: ["name", "problems"],
  CreatorCreateOrConnectWithoutLikesInput: ["where", "create"],
  CreatorCreateWithoutProblemsInput: ["name", "likes"],
  CreatorCreateOrConnectWithoutProblemsInput: ["where", "create"],
  CreatorUpsertWithWhereUniqueWithoutLikesInput: ["where", "update", "create"],
  CreatorUpdateWithWhereUniqueWithoutLikesInput: ["where", "data"],
  CreatorUpdateManyWithWhereWithoutLikesInput: ["where", "data"],
  CreatorScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  CreatorUpsertWithoutProblemsInput: ["update", "create", "where"],
  CreatorUpdateToOneWithWhereWithoutProblemsInput: ["where", "data"],
  CreatorUpdateWithoutProblemsInput: ["name", "likes"],
  ProblemCreateWithoutLikedByInput: ["problemText", "creator"],
  ProblemCreateOrConnectWithoutLikedByInput: ["where", "create"],
  ProblemCreateWithoutCreatorInput: ["problemText", "likedBy"],
  ProblemCreateOrConnectWithoutCreatorInput: ["where", "create"],
  ProblemCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  ProblemUpsertWithWhereUniqueWithoutLikedByInput: ["where", "update", "create"],
  ProblemUpdateWithWhereUniqueWithoutLikedByInput: ["where", "data"],
  ProblemUpdateManyWithWhereWithoutLikedByInput: ["where", "data"],
  ProblemScalarWhereInput: ["AND", "OR", "NOT", "id", "problemText", "creatorId"],
  ProblemUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  ProblemUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  ProblemUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostCreateManyAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "editorId", "kind", "metadata"],
  PostCreateManyEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "kind", "metadata"],
  PostUpdateWithoutAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "editor"],
  PostUpdateWithoutEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author"],
  MovieCreateManyDirectorInput: ["title"],
  MovieUpdateWithoutDirectorInput: ["title"],
  CreatorUpdateWithoutLikesInput: ["name", "problems"],
  ProblemCreateManyCreatorInput: ["id", "problemText"],
  ProblemUpdateWithoutLikedByInput: ["problemText", "creator"],
  ProblemUpdateWithoutCreatorInput: ["problemText", "likedBy"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

