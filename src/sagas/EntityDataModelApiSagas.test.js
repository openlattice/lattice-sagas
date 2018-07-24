/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { EntityDataModelApi } from 'lattice';

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
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  REORDER_ENTITY_TYPE_PROPERTY_TYPES,
  REMOVE_DST_ET_FROM_AT,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SRC_ET_FROM_AT,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
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
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  removeDstEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSrcEntityTypeFromAssociationType,
  reorderEntityTypePropertyTypes,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema
} from './EntityDataModelApiActionFactory';

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
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
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
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker,
  updateSchemaWatcher,
  updateSchemaWorker
} from './EntityDataModelApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('EntityDataModelApiSagas', () => {

  /*
   *
   * Entity Data Model APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.getEntityDataModel
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
   * EntityDataModelApiActionFactory.getEntityDataModelProjection
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
   * EntitySet APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.getEntitySet
   *
   */

  describe('getEntitySetWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetWatcher,
      getEntitySetWorker,
      GET_ENTITY_SET
    );
  });

  describe('getEntitySetWorker', () => {

    testShouldBeGeneratorFunction(getEntitySetWorker);
    testShouldFailOnInvalidAction(getEntitySetWorker, GET_ENTITY_SET);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getEntitySetId
   *
   */

  describe('getEntitySetIdWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetIdWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetIdWatcher,
      getEntitySetIdWorker,
      GET_ENTITY_SET_ID
    );
  });

  describe('getEntitySetIdWorker', () => {

    testShouldBeGeneratorFunction(getEntitySetIdWorker);
    testShouldFailOnInvalidAction(getEntitySetIdWorker, GET_ENTITY_SET_ID);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.updateEntitySetMetaData
   *
   */

  describe('updateEntitySetMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntitySetMetaDataWatcher,
      updateEntitySetMetaDataWorker,
      UPDATE_ENTITY_SET_METADATA
    );
  });

  describe('updateEntitySetMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWorker);
    testShouldFailOnInvalidAction(updateEntitySetMetaDataWorker, UPDATE_ENTITY_SET_METADATA);

    const mockActionValue = {
      entitySetId: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker
    });
  });

  /*
   *
   * EntityType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.createEntityType
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
   * EntityDataModelApiActionFactory.deleteEntityType
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
   * EntityDataModelApiActionFactory.getAllEntityTypes
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
   * EntityDataModelApiActionFactory.getEntityType
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
   * EntityDataModelApiActionFactory.updateEntityTypeMetaData
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
   * EntityDataModelApiActionFactory.addPropertyTypeToEntityType
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
   * EntityDataModelApiActionFactory.removePropertyTypeFromEntityType
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
   * EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes
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
   * EntityDataModelApiActionFactory.createPropertyType
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
   * EntityDataModelApiActionFactory.deletePropertyType
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
   * EntityDataModelApiActionFactory.getAllPropertyTypes
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
   * EntityDataModelApiActionFactory.getPropertyType
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
   * EntityDataModelApiActionFactory.updatePropertyTypeMetaData
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
   * EntityDataModelApiActionFactory.createAssociationType
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
   * EntityDataModelApiActionFactory.deleteAssociationType
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
   * EntityDataModelApiActionFactory.getAllAssociationTypes
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
   * EntityDataModelApiActionFactory.updateAssociationTypeMetaData
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
   * EntityDataModelApiActionFactory.addDstEntityTypeToAssociationType
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
   * EntityDataModelApiActionFactory.addSrcEntityTypeToAssociationType
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
   * EntityDataModelApiActionFactory.removeDstEntityTypeFromAssociationType
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
   * EntityDataModelApiActionFactory.removeSrcEntityTypeFromAssociationType
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
   * EntityDataModelApiActionFactory.createSchema
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
   * EntityDataModelApiActionFactory.getAllSchemas
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
   * EntityDataModelApiActionFactory.updateSchema
   *
   */

  describe('updateSchemaWatcher', () => {

    testShouldBeGeneratorFunction(updateSchemaWatcher);
    testWatcherSagaShouldTakeEvery(
      updateSchemaWatcher,
      updateSchemaWorker,
      UPDATE_SCHEMA
    );
  });

  describe('updateSchemaWorker', () => {

    testShouldBeGeneratorFunction(updateSchemaWorker);
    testShouldFailOnInvalidAction(updateSchemaWorker, UPDATE_SCHEMA);

    const mockSchemaFqn = { namespace: 'NAMESPACE', name: 'NAME' };
    const mockEntityTypeIds = [randomUUID()];
    const mockPropertyTypeIds = [randomUUID()];
    const mockAction = 'AN_ACTION';

    const mockActionValue = {
      schemaFqn: mockSchemaFqn,
      action: mockAction,
      entityTypeIds: mockEntityTypeIds,
      propertyTypeIds: mockPropertyTypeIds
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockSchemaFqn, mockAction, mockEntityTypeIds, mockPropertyTypeIds],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateSchema,
      latticeApiParams: [mockSchemaFqn, mockAction, mockEntityTypeIds, mockPropertyTypeIds],
      latticeApiReqSeq: updateSchema,
      workerSagaAction: updateSchema(mockActionValue),
      workerSagaToTest: updateSchemaWorker
    });
  });

});
