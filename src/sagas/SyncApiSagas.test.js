/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { SyncApi } from 'lattice';

import {
  GET_CURRENT_SYNC_ID,
  getCurrentSyncId
} from './SyncApiActionFactory';

import {
  getCurrentSyncIdWatcher,
  getCurrentSyncIdWorker
} from './SyncApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/testing/TestUtils';

describe('SyncApiSagas', () => {

  /*
   *
   * SyncApiActionFactory.getCurrentSyncId
   *
   */

  describe('getCurrentSyncIdWatcher', () => {
    testShouldBeGeneratorFunction(getCurrentSyncIdWatcher);
    testWatcherSagaShouldTakeEvery(
      getCurrentSyncIdWatcher,
      getCurrentSyncIdWorker,
      GET_CURRENT_SYNC_ID
    );
  });

  describe('getCurrentSyncIdWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getCurrentSyncIdWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SyncApi.getCurrentSyncId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCurrentSyncId,
      workerSagaAction: getCurrentSyncId(mockActionValue),
      workerSagaToTest: getCurrentSyncIdWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SyncApi.getCurrentSyncId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCurrentSyncId,
      workerSagaAction: getCurrentSyncId(mockActionValue),
      workerSagaToTest: getCurrentSyncIdWorker
    });

  });

});
