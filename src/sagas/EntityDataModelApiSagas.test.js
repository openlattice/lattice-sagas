/*
 * @flow
 */

import { EntityDataModelApi } from 'lattice';

import {
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
} from './EntityDataModelApiActionFactory';

import {
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
  getPropertyTypeWorker
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

const MOCK_ENTITY_SET_ID :string = 'ec6865e6-e60e-424b-a071-6a9c1603d735';
const MOCK_ENTITY_SET_NAME :string = 'OpenLattice';
const MOCK_ENTITY_TYPE_ID :string = '0c8be4b7-0bd5-4dd1-a623-da78871c9d0e';
const MOCK_PROPERTY_TYPE_ID :string = '4b08e1f9-4a00-4169-92ea-10e377070220';

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

    const mockActionValue = [{}];

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

    const mockActionValue = MOCK_ENTITY_SET_ID;

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

    const mockActionValue = MOCK_ENTITY_SET_NAME;

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

  /*
   *
   * EntityType APIs
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

    const mockActionValue = MOCK_ENTITY_TYPE_ID;

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

  /*
   *
   * PropertyType APIs
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

    const mockActionValue = MOCK_PROPERTY_TYPE_ID;

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

  /*
   *
   * AssociationType APIs
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

    const testInvocationParams = {
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaToTest: getAllAssociationTypesWorker
    };

    testWorkerSagaShouldHandleSuccessCase(testInvocationParams);
    testWorkerSagaShouldHandleFailureCase(testInvocationParams);
  });

});
