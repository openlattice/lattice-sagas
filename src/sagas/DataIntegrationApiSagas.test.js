/*
 * @flow
 */

import { DataIntegrationApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_ENTITY_KEY_IDS,
  getEntityKeyIds,
} from './DataIntegrationApiActions';
import {
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
   * DataIntegrationApi.getEntityKeyIds
   * DataIntegrationApiActions.getEntityKeyIds
   *
   */

  describe('getEntityKeyIdsWatcher', () => {
    testShouldBeGeneratorFunction(getEntityKeyIdsWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityKeyIdsWatcher,
      getEntityKeyIdsWorker,
      GET_ENTITY_KEY_IDS,
    );
  });

  describe('getEntityKeyIdsWorker', () => {

    const mockActionValue = [uuid(), uuid()];

    testShouldBeGeneratorFunction(getEntityKeyIdsWorker);
    testShouldFailOnInvalidAction(getEntityKeyIdsWorker, GET_ENTITY_KEY_IDS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataIntegrationApi.getEntityKeyIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityKeyIds,
      workerSagaAction: getEntityKeyIds(mockActionValue),
      workerSagaToTest: getEntityKeyIdsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataIntegrationApi.getEntityKeyIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityKeyIds,
      workerSagaAction: getEntityKeyIds(mockActionValue),
      workerSagaToTest: getEntityKeyIdsWorker,
    });
  });

});
