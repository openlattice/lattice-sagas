/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { EntityDataModelApi, Models } from 'lattice';

import {
  ADD_DST_ET_TO_AT,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SRC_ET_TO_AT,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_DIFF,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_DATA_MODEL_VERSION,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  GET_PROPERTY_TYPE_ID,
  REMOVE_DST_ET_FROM_AT,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SRC_ET_FROM_AT,
  REORDER_ENTITY_TYPE_PROPERTY_TYPES,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_DATA_MODEL,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDstEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSrcEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  createSchema,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getEntityDataModel,
  getEntityDataModelDiff,
  getEntityDataModelProjection,
  getEntityDataModelVersion,
  getEntityType,
  getPropertyType,
  getPropertyTypeId,
  removeDstEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSrcEntityTypeFromAssociationType,
  reorderEntityTypePropertyTypes,
  updateAssociationTypeMetaData,
  updateEntityDataModel,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
} from './EntityDataModelApiActions';

import {
  addDstEntityTypeToAssociationTypeWatcher,
  addDstEntityTypeToAssociationTypeWorker,
  addPropertyTypeToEntityTypeWatcher,
  addPropertyTypeToEntityTypeWorker,
  addSrcEntityTypeToAssociationTypeWatcher,
  addSrcEntityTypeToAssociationTypeWorker,
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
  getAllAssociationTypesWatcher,
  getAllAssociationTypesWorker,
  getAllEntityTypesWatcher,
  getAllEntityTypesWorker,
  getAllPropertyTypesWatcher,
  getAllPropertyTypesWorker,
  getAllSchemasWatcher,
  getAllSchemasWorker,
  getEntityDataModelDiffWatcher,
  getEntityDataModelDiffWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntityDataModelVersionWatcher,
  getEntityDataModelVersionWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeIdWatcher,
  getPropertyTypeIdWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker,
  removeDstEntityTypeFromAssociationTypeWatcher,
  removeDstEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSrcEntityTypeFromAssociationTypeWatcher,
  removeSrcEntityTypeFromAssociationTypeWorker,
  reorderEntityTypePropertyTypesWatcher,
  reorderEntityTypePropertyTypesWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntityDataModelWatcher,
  updateEntityDataModelWorker,
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

const { FullyQualifiedName } = Models;

describe('EntityDataModelApiSagas', () => {

  /*
   *
   * Entity Data Model APIs
   *
   */

  /*
   *
   * EntityDataModelApiActions.getEntityDataModel
   *
   */

  describe('getEntityDataModelWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelWatcher,
      getEntityDataModelWorker,
      GET_ENTITY_DATA_MODEL
    );
  });

  describe('getEntityDataModelWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWorker);
    testShouldFailOnInvalidAction(getEntityDataModelWorker, GET_ENTITY_DATA_MODEL, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getEntityDataModelDiff
   *
   */

  describe('getEntityDataModelDiffWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelDiffWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelDiffWatcher,
      getEntityDataModelDiffWorker,
      GET_ENTITY_DATA_MODEL_DIFF
    );
  });

  describe('getEntityDataModelDiffWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelDiffWorker);
    testShouldFailOnInvalidAction(getEntityDataModelDiffWorker, GET_ENTITY_DATA_MODEL_DIFF);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModelDiff,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelDiff,
      workerSagaAction: getEntityDataModelDiff(mockActionValue),
      workerSagaToTest: getEntityDataModelDiffWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModelDiff,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelDiff,
      workerSagaAction: getEntityDataModelDiff(mockActionValue),
      workerSagaToTest: getEntityDataModelDiffWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getEntityDataModelProjection
   *
   */

  describe('getEntityDataModelProjectionWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelProjectionWatcher,
      getEntityDataModelProjectionWorker,
      GET_ENTITY_DATA_MODEL_PROJECTION
    );
  });

  describe('getEntityDataModelProjectionWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWorker);
    testShouldFailOnInvalidAction(getEntityDataModelProjectionWorker, GET_ENTITY_DATA_MODEL_PROJECTION);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getEntityDataModelVersion
   *
   */

  describe('getEntityDataModelVersionWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelVersionWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelVersionWatcher,
      getEntityDataModelVersionWorker,
      GET_ENTITY_DATA_MODEL_VERSION
    );
  });

  describe('getEntityDataModelVersionWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelVersionWorker);
    testShouldFailOnInvalidAction(getEntityDataModelVersionWorker, GET_ENTITY_DATA_MODEL_VERSION, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModelVersion,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModelVersion,
      workerSagaAction: getEntityDataModelVersion(),
      workerSagaToTest: getEntityDataModelVersionWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModelVersion,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModelVersion,
      workerSagaAction: getEntityDataModelVersion(),
      workerSagaToTest: getEntityDataModelVersionWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.updateEntityDataModel
   *
   */

  describe('updateEntityDataModelWatcher', () => {

    testShouldBeGeneratorFunction(updateEntityDataModelWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntityDataModelWatcher,
      updateEntityDataModelWorker,
      UPDATE_ENTITY_DATA_MODEL
    );
  });

  describe('updateEntityDataModelWorker', () => {

    testShouldBeGeneratorFunction(updateEntityDataModelWorker);
    testShouldFailOnInvalidAction(updateEntityDataModelWorker, UPDATE_ENTITY_DATA_MODEL);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityDataModel,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateEntityDataModel,
      workerSagaAction: updateEntityDataModel(mockActionValue),
      workerSagaToTest: updateEntityDataModelWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityDataModel,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateEntityDataModel,
      workerSagaAction: updateEntityDataModel(mockActionValue),
      workerSagaToTest: updateEntityDataModelWorker
    });
  });

  /*
   *
   * EntityType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActions.createEntityType
   *
   */

  describe('createEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(createEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntityTypeWatcher,
      createEntityTypeWorker,
      CREATE_ENTITY_TYPE
    );
  });

  describe('createEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(createEntityTypeWorker);
    testShouldFailOnInvalidAction(createEntityTypeWorker, CREATE_ENTITY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.deleteEntityType
   *
   */

  describe('deleteEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityTypeWatcher,
      deleteEntityTypeWorker,
      DELETE_ENTITY_TYPE
    );
  });

  describe('deleteEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(deleteEntityTypeWorker);
    testShouldFailOnInvalidAction(deleteEntityTypeWorker, DELETE_ENTITY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getAllEntityTypes
   *
   */

  describe('getAllEntityTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllEntityTypesWatcher,
      getAllEntityTypesWorker,
      GET_ALL_ENTITY_TYPES
    );
  });

  describe('getAllEntityTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWorker);
    testShouldFailOnInvalidAction(getAllEntityTypesWorker, GET_ALL_ENTITY_TYPES, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getEntityType
   *
   */

  describe('getEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(getEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityTypeWatcher,
      getEntityTypeWorker,
      GET_ENTITY_TYPE
    );
  });

  describe('getEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(getEntityTypeWorker);
    testShouldFailOnInvalidAction(getEntityTypeWorker, GET_ENTITY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.updateEntityTypeMetaData
   *
   */

  describe('updateEntityTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntityTypeMetaDataWatcher,
      updateEntityTypeMetaDataWorker,
      UPDATE_ENTITY_TYPE_METADATA
    );
  });

  describe('updateEntityTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updateEntityTypeMetaDataWorker, UPDATE_ENTITY_TYPE_METADATA);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.addPropertyTypeToEntityType
   *
   */

  describe('addPropertyTypeToEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addPropertyTypeToEntityTypeWatcher,
      addPropertyTypeToEntityTypeWorker,
      ADD_PROPERTY_TYPE_TO_ENTITY_TYPE
    );
  });

  describe('addPropertyTypeToEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWorker);
    testShouldFailOnInvalidAction(addPropertyTypeToEntityTypeWorker, ADD_PROPERTY_TYPE_TO_ENTITY_TYPE);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      propertyTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.removePropertyTypeFromEntityType
   *
   */

  describe('removePropertyTypeFromEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removePropertyTypeFromEntityTypeWatcher,
      removePropertyTypeFromEntityTypeWorker,
      REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE
    );
  });

  describe('removePropertyTypeFromEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWorker);
    testShouldFailOnInvalidAction(removePropertyTypeFromEntityTypeWorker, REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      propertyTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.reorderEntityTypePropertyTypes
   *
   */

  describe('reorderEntityTypePropertyTypesWatcher', () => {

    testShouldBeGeneratorFunction(reorderEntityTypePropertyTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      reorderEntityTypePropertyTypesWatcher,
      reorderEntityTypePropertyTypesWorker,
      REORDER_ENTITY_TYPE_PROPERTY_TYPES
    );
  });

  describe('reorderEntityTypePropertyTypesWorker', () => {

    testShouldBeGeneratorFunction(reorderEntityTypePropertyTypesWorker);
    testShouldFailOnInvalidAction(reorderEntityTypePropertyTypesWorker, REORDER_ENTITY_TYPE_PROPERTY_TYPES);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      propertyTypeIds: [randomUUID(), randomUUID()]
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.reorderPropertyTypesInEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeIds],
      latticeApiReqSeq: reorderEntityTypePropertyTypes,
      workerSagaAction: reorderEntityTypePropertyTypes(mockActionValue),
      workerSagaToTest: reorderEntityTypePropertyTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.reorderPropertyTypesInEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeIds],
      latticeApiReqSeq: reorderEntityTypePropertyTypes,
      workerSagaAction: reorderEntityTypePropertyTypes(mockActionValue),
      workerSagaToTest: reorderEntityTypePropertyTypesWorker
    });
  });

  /*
   *
   * PropertyType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActions.createPropertyType
   *
   */

  describe('createPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(createPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createPropertyTypeWatcher,
      createPropertyTypeWorker,
      CREATE_PROPERTY_TYPE
    );
  });

  describe('createPropertyTypeWorker', () => {

    testShouldBeGeneratorFunction(createPropertyTypeWorker);
    testShouldFailOnInvalidAction(createPropertyTypeWorker, CREATE_PROPERTY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.deletePropertyType
   *
   */

  describe('deletePropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(deletePropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deletePropertyTypeWatcher,
      deletePropertyTypeWorker,
      DELETE_PROPERTY_TYPE
    );
  });

  describe('deletePropertyTypeWorker', () => {

    testShouldBeGeneratorFunction(deletePropertyTypeWorker);
    testShouldFailOnInvalidAction(deletePropertyTypeWorker, DELETE_PROPERTY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getAllPropertyTypes
   *
   */

  describe('getAllPropertyTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllPropertyTypesWatcher,
      getAllPropertyTypesWorker,
      GET_ALL_PROPERTY_TYPES
    );
  });

  describe('getAllPropertyTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWorker);
    testShouldFailOnInvalidAction(getAllPropertyTypesWorker, GET_ALL_PROPERTY_TYPES, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getPropertyType
   *
   */

  describe('getPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeWatcher,
      getPropertyTypeWorker,
      GET_PROPERTY_TYPE
    );
  });

  describe('getPropertyTypeWorker', () => {

    testShouldBeGeneratorFunction(getPropertyTypeWorker);
    testShouldFailOnInvalidAction(getPropertyTypeWorker, GET_PROPERTY_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getPropertyTypeId
   *
   */

  describe('getPropertyTypeIdWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeIdWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeIdWatcher,
      getPropertyTypeIdWorker,
      GET_PROPERTY_TYPE_ID,
    );
  });

  describe('getPropertyTypeIdWorker', () => {

    testShouldBeGeneratorFunction(getPropertyTypeIdWorker);
    testShouldFailOnInvalidAction(getPropertyTypeIdWorker, GET_PROPERTY_TYPE_ID);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getPropertyTypeId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyTypeId,
      workerSagaAction: getPropertyTypeId(mockActionValue),
      workerSagaToTest: getPropertyTypeIdWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getPropertyTypeId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyTypeId,
      workerSagaAction: getPropertyTypeId(mockActionValue),
      workerSagaToTest: getPropertyTypeIdWorker,
    });
  });

  /*
   *
   * EntityDataModelApiActions.updatePropertyTypeMetaData
   *
   */

  describe('updatePropertyTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updatePropertyTypeMetaDataWatcher,
      updatePropertyTypeMetaDataWorker,
      UPDATE_PROPERTY_TYPE_METADATA
    );
  });

  describe('updatePropertyTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updatePropertyTypeMetaDataWorker, UPDATE_PROPERTY_TYPE_METADATA);

    const mockActionValue = {
      propertyTypeId: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.propertyTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.propertyTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker
    });
  });

  /*
   *
   * AssociationType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActions.createAssociationType
   *
   */

  describe('createAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(createAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createAssociationTypeWatcher,
      createAssociationTypeWorker,
      CREATE_ASSOCIATION_TYPE
    );
  });

  describe('createAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(createAssociationTypeWorker);
    testShouldFailOnInvalidAction(createAssociationTypeWorker, CREATE_ASSOCIATION_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.deleteAssociationType
   *
   */

  describe('deleteAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteAssociationTypeWatcher,
      deleteAssociationTypeWorker,
      DELETE_ASSOCIATION_TYPE
    );
  });

  describe('deleteAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(deleteAssociationTypeWorker);
    testShouldFailOnInvalidAction(deleteAssociationTypeWorker, DELETE_ASSOCIATION_TYPE);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getAllAssociationTypes
   *
   */

  describe('getAllAssociationTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllAssociationTypesWatcher,
      getAllAssociationTypesWorker,
      GET_ALL_ASSOCIATION_TYPES
    );
  });

  describe('getAllAssociationTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWorker);
    testShouldFailOnInvalidAction(getAllAssociationTypesWorker, GET_ALL_ASSOCIATION_TYPES, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.updateAssociationTypeMetaData
   *
   */

  describe('updateAssociationTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateAssociationTypeMetaDataWatcher,
      updateAssociationTypeMetaDataWorker,
      UPDATE_ASSOCIATION_TYPE_METADATA
    );
  });

  describe('updateAssociationTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWorker);
    testShouldFailOnInvalidAction(updateAssociationTypeMetaDataWorker, UPDATE_ASSOCIATION_TYPE_METADATA);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      metadata: randomUUID()
    };

    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.addDstEntityTypeToAssociationType
   *
   */

  describe('addDstEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addDstEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addDstEntityTypeToAssociationTypeWatcher,
      addDstEntityTypeToAssociationTypeWorker,
      ADD_DST_ET_TO_AT
    );
  });

  describe('addDstEntityTypeToAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(addDstEntityTypeToAssociationTypeWorker);
    testShouldFailOnInvalidAction(addDstEntityTypeToAssociationTypeWorker, ADD_DST_ET_TO_AT);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addDstEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDstEntityTypeToAssociationType,
      workerSagaAction: addDstEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDstEntityTypeToAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addDstEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDstEntityTypeToAssociationType,
      workerSagaAction: addDstEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDstEntityTypeToAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.addSrcEntityTypeToAssociationType
   *
   */

  describe('addSrcEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addSrcEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addSrcEntityTypeToAssociationTypeWatcher,
      addSrcEntityTypeToAssociationTypeWorker,
      ADD_SRC_ET_TO_AT
    );
  });

  describe('addSrcEntityTypeToAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(addSrcEntityTypeToAssociationTypeWorker);
    testShouldFailOnInvalidAction(addSrcEntityTypeToAssociationTypeWorker, ADD_SRC_ET_TO_AT);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addSrcEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSrcEntityTypeToAssociationType,
      workerSagaAction: addSrcEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSrcEntityTypeToAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addSrcEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSrcEntityTypeToAssociationType,
      workerSagaAction: addSrcEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSrcEntityTypeToAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.removeDstEntityTypeFromAssociationType
   *
   */

  describe('removeDstEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeDstEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDstEntityTypeFromAssociationTypeWatcher,
      removeDstEntityTypeFromAssociationTypeWorker,
      REMOVE_DST_ET_FROM_AT
    );
  });

  describe('removeDstEntityTypeFromAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(removeDstEntityTypeFromAssociationTypeWorker);
    testShouldFailOnInvalidAction(removeDstEntityTypeFromAssociationTypeWorker, REMOVE_DST_ET_FROM_AT);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDstEntityTypeFromAssociationType,
      workerSagaAction: removeDstEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDstEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDstEntityTypeFromAssociationType,
      workerSagaAction: removeDstEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDstEntityTypeFromAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.removeSrcEntityTypeFromAssociationType
   *
   */

  describe('removeSrcEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeSrcEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeSrcEntityTypeFromAssociationTypeWatcher,
      removeSrcEntityTypeFromAssociationTypeWorker,
      REMOVE_SRC_ET_FROM_AT
    );
  });

  describe('removeSrcEntityTypeFromAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(removeSrcEntityTypeFromAssociationTypeWorker);
    testShouldFailOnInvalidAction(removeSrcEntityTypeFromAssociationTypeWorker, REMOVE_SRC_ET_FROM_AT);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSrcEntityTypeFromAssociationType,
      workerSagaAction: removeSrcEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSrcEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSrcEntityTypeFromAssociationType,
      workerSagaAction: removeSrcEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSrcEntityTypeFromAssociationTypeWorker
    });
  });

  /*
   *
   * Schema APIs
   *
   */

  /*
   *
   * EntityDataModelApiActions.createSchema
   *
   */

  describe('createSchemaWatcher', () => {

    testShouldBeGeneratorFunction(createSchemaWatcher);
    testWatcherSagaShouldTakeEvery(
      createSchemaWatcher,
      createSchemaWorker,
      CREATE_SCHEMA
    );
  });

  describe('createSchemaWorker', () => {

    testShouldBeGeneratorFunction(createSchemaWorker);
    testShouldFailOnInvalidAction(createSchemaWorker, CREATE_SCHEMA);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createSchema,
      workerSagaAction: createSchema(mockActionValue),
      workerSagaToTest: createSchemaWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createSchema,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createSchema,
      workerSagaAction: createSchema(mockActionValue),
      workerSagaToTest: createSchemaWorker
    });
  });

  /*
   *
   * EntityDataModelApiActions.getAllSchemas
   *
   */

  describe('getAllSchemasWatcher', () => {

    testShouldBeGeneratorFunction(getAllSchemasWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllSchemasWatcher,
      getAllSchemasWorker,
      GET_ALL_SCHEMAS
    );
  });

  describe('getAllSchemasWorker', () => {

    testShouldBeGeneratorFunction(getAllSchemasWorker);
    testShouldFailOnInvalidAction(getAllSchemasWorker, GET_ALL_SCHEMAS, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllSchemas,
      latticeApiParams: [],
      latticeApiReqSeq: getAllSchemas,
      workerSagaAction: getAllSchemas(),
      workerSagaToTest: getAllSchemasWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllSchemas,
      latticeApiParams: [],
      latticeApiReqSeq: getAllSchemas,
      workerSagaAction: getAllSchemas(),
      workerSagaToTest: getAllSchemasWorker
    });
  });

  /*
   *
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

    testShouldBeGeneratorFunction(updateSchemaWorker);
    testShouldFailOnInvalidAction(updateSchemaWorker, UPDATE_SCHEMA);

    const mockSchemaFQN = new FullyQualifiedName({ namespace: 'NAMESPACE', name: 'NAME' });
    const mockEntityTypeIds = [randomUUID()];
    const mockPropertyTypeIds = [randomUUID()];
    const mockAction = 'AN_ACTION';

    const mockActionValue = {
      schemaFQN: mockSchemaFQN,
      action: mockAction,
      entityTypeIds: mockEntityTypeIds,
      propertyTypeIds: mockPropertyTypeIds
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockSchemaFQN, mockAction, mockEntityTypeIds, mockPropertyTypeIds],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockSchemaFQN, mockAction, mockEntityTypeIds, mockPropertyTypeIds],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker
    });
  });

});
