/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { EntityDataModelApi } from 'lattice';

import {
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  createAssociationType,
  createEntityType,
  createPropertyType,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData
} from './EntityDataModelApiActionFactory';

import {
  createAssociationTypeWatcher,
  createAssociationTypeWorker,
  createEntityTypeWatcher,
  createEntityTypeWorker,
  createPropertyTypeWatcher,
  createPropertyTypeWorker,
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
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker
} from './EntityDataModelApiSagas';

import {
  getMockAction
} from '../utils/MockDataUtils';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/TestUtils';

describe('EntityDataModelApiSagas', () => {

  /*
   *
   * Entity Data Model APIs
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

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiReqSeq: getEntityDataModel,
      workerSagaToTest: getEntityDataModelWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  /*
   *
   * EntitySet APIs
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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: getEntitySetWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  /*
   *
   * EntityType APIs
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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: createEntityTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  describe('deleteEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityTypeWatcher,
      deleteEntityTypeWorker,
      DELETE_ENTITY_TYPE
    );
  });

  describe('deleteEntityTypeWorker', () => {

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaToTest: getAllEntityTypesWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: getEntityTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  /*
   *
   * PropertyType APIs
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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  describe('deletePropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(deletePropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deletePropertyTypeWatcher,
      deletePropertyTypeWorker,
      DELETE_PROPERTY_TYPE
    );
  });

  describe('deletePropertyTypeWorker', () => {

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaToTest: getAllPropertyTypesWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  /*
   *
   * AssociationType APIs
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

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

  describe('deleteAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteAssociationTypeWatcher,
      deleteAssociationTypeWorker,
      DELETE_ASSOCIATION_TYPE
    );
  });

  describe('deleteAssociationTypeWorker', () => {

    const mockActionValue = randomUUID();

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaToTest: getAllAssociationTypesWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

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

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    const testInvocationParams = {
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: getMockAction(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

});
