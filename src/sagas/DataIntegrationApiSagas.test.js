/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataIntegrationApi } from 'lattice';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  GET_ENTITY_KEY_IDS,
  createEntityAndAssociationData,
  getEntityKeyIds,
} from './DataIntegrationApiActions';

import {
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  getEntityKeyIdsWatcher,
  getEntityKeyIdsWorker,
} from './DataIntegrationApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('DataIntegrationApiSagas', () => {

  /*
   *
   * DataIntegrationApi.createEntityAndAssociationData
   * DataIntegrationApiActions.createEntityAndAssociationData
   *
   */

  describe('createEntityAndAssociationDataWatcher', () => {
    testShouldBeGeneratorFunction(createEntityAndAssociationDataWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntityAndAssociationDataWatcher,
      createEntityAndAssociationDataWorker,
      CREATE_ENTITY_AND_ASSOCIATION_DATA
    );
  });

  describe('createEntityAndAssociationDataWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(createEntityAndAssociationDataWorker);
    testShouldFailOnInvalidAction(createEntityAndAssociationDataWorker, CREATE_ENTITY_AND_ASSOCIATION_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataIntegrationApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataIntegrationApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

  });

  /*
   *
   * DataIntegrationApi.createEntityAndAssociationData
   * DataIntegrationApiActions.createEntityAndAssociationData
   *
   */

  describe('getEntityKeyIdsWatcher', () => {
    testShouldBeGeneratorFunction(getEntityKeyIdsWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityKeyIdsWatcher,
      getEntityKeyIdsWorker,
      GET_ENTITY_KEY_IDS
    );
  });

  describe('getEntityKeyIdsWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityId: randomUUID()
    };

    testShouldBeGeneratorFunction(getEntityKeyIdsWorker);
    testShouldFailOnInvalidAction(getEntityKeyIdsWorker, GET_ENTITY_KEY_IDS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataIntegrationApi.getEntityKeyIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityKeyIds,
      workerSagaAction: getEntityKeyIds(mockActionValue),
      workerSagaToTest: getEntityKeyIdsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataIntegrationApi.getEntityKeyIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityKeyIds,
      workerSagaAction: getEntityKeyIds(mockActionValue),
      workerSagaToTest: getEntityKeyIdsWorker
    });

  });

});
