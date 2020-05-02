/*
 * @flow
 */

import { EntityDataModelApi, Models } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_ENTITY_TYPES,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ASSOCIATION_TYPE,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  GET_SCHEMA,
  REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDestinationEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSourceEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  createSchema,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationEntityTypes,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getAssociationType,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntityType,
  getPropertyType,
  getSchema,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  updateAssociationTypeMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
} from './EntityDataModelApiActions';
import {
  addDestinationEntityTypeToAssociationTypeWatcher,
  addDestinationEntityTypeToAssociationTypeWorker,
  addPropertyTypeToEntityTypeWatcher,
  addPropertyTypeToEntityTypeWorker,
  addSourceEntityTypeToAssociationTypeWatcher,
  addSourceEntityTypeToAssociationTypeWorker,
  createAssociationTypeWatcher,
  createAssociationTypeWorker,
  createEntityTypeWatcher,
  createEntityTypeWorker,
  createPropertyTypeWatcher,
  createPropertyTypeWorker,
  createSchemaWatcher,
  createSchemaWorker,
  deleteAssociationTypeWatcher,
  deleteAssociationTypeWorker,
  deleteEntityTypeWatcher,
  deleteEntityTypeWorker,
  deletePropertyTypeWatcher,
  deletePropertyTypeWorker,
  getAllAssociationEntityTypesWatcher,
  getAllAssociationEntityTypesWorker,
  getAllAssociationTypesWatcher,
  getAllAssociationTypesWorker,
  getAllEntityTypesWatcher,
  getAllEntityTypesWorker,
  getAllPropertyTypesWatcher,
  getAllPropertyTypesWorker,
  getAllSchemasWatcher,
  getAllSchemasWorker,
  getAssociationTypeWatcher,
  getAssociationTypeWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker,
  getSchemaWatcher,
  getSchemaWorker,
  removeDestinationEntityTypeFromAssociationTypeWatcher,
  removeDestinationEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSourceEntityTypeFromAssociationTypeWatcher,
  removeSourceEntityTypeFromAssociationTypeWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker,
  updateSchemaWatcher,
  updateSchemaWorker,
} from './EntityDataModelApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

const { FQN } = Models;

describe('EntityDataModelApiSagas', () => {

  /*
   *
   * EntityDataModelApi.addDestinationEntityTypeToAssociationType
   * EntityDataModelApiActions.addDestinationEntityTypeToAssociationType
   *
   */

  describe('addDestinationEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addDestinationEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addDestinationEntityTypeToAssociationTypeWatcher,
      addDestinationEntityTypeToAssociationTypeWorker,
      ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
    );
  });

  describe('addDestinationEntityTypeToAssociationTypeWorker', () => {

    const mockActionValue = {
      associationTypeId: uuid(),
      entityTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(addDestinationEntityTypeToAssociationTypeWorker);
    testShouldFailOnInvalidAction(
      addDestinationEntityTypeToAssociationTypeWorker,
      ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addDestinationEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDestinationEntityTypeToAssociationType,
      workerSagaAction: addDestinationEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDestinationEntityTypeToAssociationTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addDestinationEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDestinationEntityTypeToAssociationType,
      workerSagaAction: addDestinationEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDestinationEntityTypeToAssociationTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.addPropertyTypeToEntityType
   * EntityDataModelApiActions.addPropertyTypeToEntityType
   *
   */

  describe('addPropertyTypeToEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addPropertyTypeToEntityTypeWatcher,
      addPropertyTypeToEntityTypeWorker,
      ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
    );
  });

  describe('addPropertyTypeToEntityTypeWorker', () => {

    const mockActionValue = {
      entityTypeId: uuid(),
      propertyTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWorker);
    testShouldFailOnInvalidAction(addPropertyTypeToEntityTypeWorker, ADD_PROPERTY_TYPE_TO_ENTITY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.addSourceEntityTypeToAssociationType
   * EntityDataModelApiActions.addSourceEntityTypeToAssociationType
   *
   */

  describe('addSourceEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addSourceEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addSourceEntityTypeToAssociationTypeWatcher,
      addSourceEntityTypeToAssociationTypeWorker,
      ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
    );
  });

  describe('addSourceEntityTypeToAssociationTypeWorker', () => {

    const mockActionValue = {
      associationTypeId: uuid(),
      entityTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(addSourceEntityTypeToAssociationTypeWorker);
    testShouldFailOnInvalidAction(
      addSourceEntityTypeToAssociationTypeWorker,
      ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addSourceEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSourceEntityTypeToAssociationType,
      workerSagaAction: addSourceEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSourceEntityTypeToAssociationTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addSourceEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSourceEntityTypeToAssociationType,
      workerSagaAction: addSourceEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSourceEntityTypeToAssociationTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.createAssociationType
   * EntityDataModelApiActions.createAssociationType
   *
   */

  describe('createAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(createAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createAssociationTypeWatcher,
      createAssociationTypeWorker,
      CREATE_ASSOCIATION_TYPE,
    );
  });

  describe('createAssociationTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createAssociationTypeWorker);
    testShouldFailOnInvalidAction(createAssociationTypeWorker, CREATE_ASSOCIATION_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.createEntityType
   * EntityDataModelApiActions.createEntityType
   *
   */

  describe('createEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(createEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntityTypeWatcher,
      createEntityTypeWorker,
      CREATE_ENTITY_TYPE,
    );
  });

  describe('createEntityTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createEntityTypeWorker);
    testShouldFailOnInvalidAction(createEntityTypeWorker, CREATE_ENTITY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.createPropertyType
   * EntityDataModelApiActions.createPropertyType
   *
   */

  describe('createPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(createPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createPropertyTypeWatcher,
      createPropertyTypeWorker,
      CREATE_PROPERTY_TYPE,
    );
  });

  describe('createPropertyTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createPropertyTypeWorker);
    testShouldFailOnInvalidAction(createPropertyTypeWorker, CREATE_PROPERTY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.createSchema
   * EntityDataModelApiActions.createSchema
   *
   */

  describe('createSchemaWatcher', () => {

    testShouldBeGeneratorFunction(createSchemaWatcher);
    testWatcherSagaShouldTakeEvery(
      createSchemaWatcher,
      createSchemaWorker,
      CREATE_SCHEMA,
    );
  });

  describe('createSchemaWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createSchemaWorker);
    testShouldFailOnInvalidAction(createSchemaWorker, CREATE_SCHEMA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createSchema,
      workerSagaAction: createSchema(mockActionValue),
      workerSagaToTest: createSchemaWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createSchema,
      workerSagaAction: createSchema(mockActionValue),
      workerSagaToTest: createSchemaWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.deleteAssociationType
   * EntityDataModelApiActions.deleteAssociationType
   *
   */

  describe('deleteAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteAssociationTypeWatcher,
      deleteAssociationTypeWorker,
      DELETE_ASSOCIATION_TYPE,
    );
  });

  describe('deleteAssociationTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(deleteAssociationTypeWorker);
    testShouldFailOnInvalidAction(deleteAssociationTypeWorker, DELETE_ASSOCIATION_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.deleteEntityType
   * EntityDataModelApiActions.deleteEntityType
   *
   */

  describe('deleteEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityTypeWatcher,
      deleteEntityTypeWorker,
      DELETE_ENTITY_TYPE,
    );
  });

  describe('deleteEntityTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(deleteEntityTypeWorker);
    testShouldFailOnInvalidAction(deleteEntityTypeWorker, DELETE_ENTITY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.deletePropertyType
   * EntityDataModelApiActions.deletePropertyType
   *
   */

  describe('deletePropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(deletePropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deletePropertyTypeWatcher,
      deletePropertyTypeWorker,
      DELETE_PROPERTY_TYPE,
    );
  });

  describe('deletePropertyTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(deletePropertyTypeWorker);
    testShouldFailOnInvalidAction(deletePropertyTypeWorker, DELETE_PROPERTY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAllAssociationEntityTypes
   * EntityDataModelApiActions.getAllAssociationEntityTypes
   *
   */

  describe('getAllAssociationEntityTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllAssociationEntityTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllAssociationEntityTypesWatcher,
      getAllAssociationEntityTypesWorker,
      GET_ALL_ASSOCIATION_ENTITY_TYPES,
    );
  });

  describe('getAllAssociationEntityTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllAssociationEntityTypesWorker);
    testShouldFailOnInvalidAction(getAllAssociationEntityTypesWorker, GET_ALL_ASSOCIATION_ENTITY_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllAssociationEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationEntityTypes,
      workerSagaAction: getAllAssociationEntityTypes(),
      workerSagaToTest: getAllAssociationEntityTypesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllAssociationEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationEntityTypes,
      workerSagaAction: getAllAssociationEntityTypes(),
      workerSagaToTest: getAllAssociationEntityTypesWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAllAssociationTypes
   * EntityDataModelApiActions.getAllAssociationTypes
   *
   */

  describe('getAllAssociationTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllAssociationTypesWatcher,
      getAllAssociationTypesWorker,
      GET_ALL_ASSOCIATION_TYPES,
    );
  });

  describe('getAllAssociationTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWorker);
    testShouldFailOnInvalidAction(getAllAssociationTypesWorker, GET_ALL_ASSOCIATION_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAllEntityTypes
   * EntityDataModelApiActions.getAllEntityTypes
   *
   */

  describe('getAllEntityTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllEntityTypesWatcher,
      getAllEntityTypesWorker,
      GET_ALL_ENTITY_TYPES,
    );
  });

  describe('getAllEntityTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWorker);
    testShouldFailOnInvalidAction(getAllEntityTypesWorker, GET_ALL_ENTITY_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAllPropertyTypes
   * EntityDataModelApiActions.getAllPropertyTypes
   *
   */

  describe('getAllPropertyTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllPropertyTypesWatcher,
      getAllPropertyTypesWorker,
      GET_ALL_PROPERTY_TYPES,
    );
  });

  describe('getAllPropertyTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWorker);
    testShouldFailOnInvalidAction(getAllPropertyTypesWorker, GET_ALL_PROPERTY_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAllSchemas
   * EntityDataModelApiActions.getAllSchemas
   *
   */

  describe('getAllSchemasWatcher', () => {

    testShouldBeGeneratorFunction(getAllSchemasWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllSchemasWatcher,
      getAllSchemasWorker,
      GET_ALL_SCHEMAS,
    );
  });

  describe('getAllSchemasWorker', () => {

    testShouldBeGeneratorFunction(getAllSchemasWorker);
    testShouldFailOnInvalidAction(getAllSchemasWorker, GET_ALL_SCHEMAS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllSchemas,
      latticeApiParams: [],
      latticeApiReqSeq: getAllSchemas,
      workerSagaAction: getAllSchemas(),
      workerSagaToTest: getAllSchemasWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllSchemas,
      latticeApiParams: [],
      latticeApiReqSeq: getAllSchemas,
      workerSagaAction: getAllSchemas(),
      workerSagaToTest: getAllSchemasWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getAssociationType
   * EntityDataModelApiActions.getAssociationType
   *
   */

  describe('getAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(getAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getAssociationTypeWatcher,
      getAssociationTypeWorker,
      GET_ASSOCIATION_TYPE,
    );
  });

  describe('getAssociationTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAssociationTypeWorker);
    testShouldFailOnInvalidAction(getAssociationTypeWorker, GET_ASSOCIATION_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAssociationType,
      workerSagaAction: getAssociationType(mockActionValue),
      workerSagaToTest: getAssociationTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAssociationType,
      workerSagaAction: getAssociationType(mockActionValue),
      workerSagaToTest: getAssociationTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getEntityDataModel
   * EntityDataModelApiActions.getEntityDataModel
   *
   */

  describe('getEntityDataModelWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelWatcher,
      getEntityDataModelWorker,
      GET_ENTITY_DATA_MODEL,
    );
  });

  describe('getEntityDataModelWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWorker);
    testShouldFailOnInvalidAction(getEntityDataModelWorker, GET_ENTITY_DATA_MODEL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getEntityDataModelProjection
   * EntityDataModelApiActions.getEntityDataModelProjection
   *
   */

  describe('getEntityDataModelProjectionWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelProjectionWatcher,
      getEntityDataModelProjectionWorker,
      GET_ENTITY_DATA_MODEL_PROJECTION,
    );
  });

  describe('getEntityDataModelProjectionWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWorker);
    testShouldFailOnInvalidAction(getEntityDataModelProjectionWorker, GET_ENTITY_DATA_MODEL_PROJECTION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getEntityType
   * EntityDataModelApiActions.getEntityType
   *
   */

  describe('getEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(getEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityTypeWatcher,
      getEntityTypeWorker,
      GET_ENTITY_TYPE,
    );
  });

  describe('getEntityTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntityTypeWorker);
    testShouldFailOnInvalidAction(getEntityTypeWorker, GET_ENTITY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getPropertyType
   * EntityDataModelApiActions.getPropertyType
   *
   */

  describe('getPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeWatcher,
      getPropertyTypeWorker,
      GET_PROPERTY_TYPE,
    );
  });

  describe('getPropertyTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getPropertyTypeWorker);
    testShouldFailOnInvalidAction(getPropertyTypeWorker, GET_PROPERTY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.getSchema
   * EntityDataModelApiActions.getSchema
   *
   */

  describe('getSchemaWatcher', () => {

    testShouldBeGeneratorFunction(getSchemaWatcher);
    testWatcherSagaShouldTakeEvery(
      getSchemaWatcher,
      getSchemaWorker,
      GET_SCHEMA,
    );
  });

  describe('getSchemaWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getSchemaWorker);
    testShouldFailOnInvalidAction(getSchemaWorker, GET_SCHEMA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getSchema,
      workerSagaAction: getSchema(mockActionValue),
      workerSagaToTest: getSchemaWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getSchema,
      workerSagaAction: getSchema(mockActionValue),
      workerSagaToTest: getSchemaWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.removeDestinationEntityTypeFromAssociationType
   * EntityDataModelApiActions.removeDestinationEntityTypeFromAssociationType
   *
   */

  describe('removeDestinationEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeDestinationEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDestinationEntityTypeFromAssociationTypeWatcher,
      removeDestinationEntityTypeFromAssociationTypeWorker,
      REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE
    );
  });

  describe('removeDestinationEntityTypeFromAssociationTypeWorker', () => {

    const mockActionValue = {
      associationTypeId: uuid(),
      entityTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(removeDestinationEntityTypeFromAssociationTypeWorker);
    testShouldFailOnInvalidAction(
      removeDestinationEntityTypeFromAssociationTypeWorker,
      REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeDestinationEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDestinationEntityTypeFromAssociationType,
      workerSagaAction: removeDestinationEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDestinationEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeDestinationEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDestinationEntityTypeFromAssociationType,
      workerSagaAction: removeDestinationEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDestinationEntityTypeFromAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApi.removePropertyTypeFromEntityType
   * EntityDataModelApiActions.removePropertyTypeFromEntityType
   *
   */

  describe('removePropertyTypeFromEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removePropertyTypeFromEntityTypeWatcher,
      removePropertyTypeFromEntityTypeWorker,
      REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
    );
  });

  describe('removePropertyTypeFromEntityTypeWorker', () => {

    const mockActionValue = {
      entityTypeId: uuid(),
      propertyTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWorker);
    testShouldFailOnInvalidAction(removePropertyTypeFromEntityTypeWorker, REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.removeSourceEntityTypeFromAssociationType
   * EntityDataModelApiActions.removeSourceEntityTypeFromAssociationType
   *
   */

  describe('removeSourceEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeSourceEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeSourceEntityTypeFromAssociationTypeWatcher,
      removeSourceEntityTypeFromAssociationTypeWorker,
      REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE
    );
  });

  describe('removeSourceEntityTypeFromAssociationTypeWorker', () => {

    const mockActionValue = {
      associationTypeId: uuid(),
      entityTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(removeSourceEntityTypeFromAssociationTypeWorker);
    testShouldFailOnInvalidAction(
      removeSourceEntityTypeFromAssociationTypeWorker,
      REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeSourceEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSourceEntityTypeFromAssociationType,
      workerSagaAction: removeSourceEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSourceEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeSourceEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSourceEntityTypeFromAssociationType,
      workerSagaAction: removeSourceEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSourceEntityTypeFromAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApi.updateAssociationTypeMetaData
   * EntityDataModelApiActions.updateAssociationTypeMetaData
   *
   */

  describe('updateAssociationTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateAssociationTypeMetaDataWatcher,
      updateAssociationTypeMetaDataWorker,
      UPDATE_ASSOCIATION_TYPE_METADATA,
    );
  });

  describe('updateAssociationTypeMetaDataWorker', () => {

    const mockActionValue = {
      associationTypeId: uuid(),
      metadata: uuid(),
    };

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updateAssociationTypeMetaDataWorker, UPDATE_ASSOCIATION_TYPE_METADATA);

    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.updateEntityTypeMetaData
   * EntityDataModelApiActions.updateEntityTypeMetaData
   *
   */

  describe('updateEntityTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntityTypeMetaDataWatcher,
      updateEntityTypeMetaDataWorker,
      UPDATE_ENTITY_TYPE_METADATA,
    );
  });

  describe('updateEntityTypeMetaDataWorker', () => {

    const mockActionValue = {
      entityTypeId: uuid(),
      metadata: uuid(),
    };

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updateEntityTypeMetaDataWorker, UPDATE_ENTITY_TYPE_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.updatePropertyTypeMetaData
   * EntityDataModelApiActions.updatePropertyTypeMetaData
   *
   */

  describe('updatePropertyTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updatePropertyTypeMetaDataWatcher,
      updatePropertyTypeMetaDataWorker,
      UPDATE_PROPERTY_TYPE_METADATA,
    );
  });

  describe('updatePropertyTypeMetaDataWorker', () => {

    const mockActionValue = {
      metadata: uuid(),
      propertyTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updatePropertyTypeMetaDataWorker, UPDATE_PROPERTY_TYPE_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.propertyTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.propertyTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker,
    });
  });

  /*
   *
   * EntityDataModelApi.updateSchema
   * EntityDataModelApiActions.updateSchema
   *
   */

  describe('updateSchemaWatcher', () => {

    testShouldBeGeneratorFunction(updateSchemaWatcher);
    testWatcherSagaShouldTakeEvery(
      updateSchemaWatcher,
      updateSchemaWorker,
      UPDATE_SCHEMA,
    );
  });

  describe('updateSchemaWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(updateSchemaWorker);
    testShouldFailOnInvalidAction(updateSchemaWorker, UPDATE_SCHEMA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker,
    });
  });

});
