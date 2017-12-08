/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { SearchApi } from 'lattice';

import {
  SEARCH_ENTITY_SET_DATA,
  searchEntitySetData
} from './SearchApiActionFactory';

import {
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker
} from './SearchApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/TestUtils';

describe('SearchApiSagas', () => {

  describe('searchEntitySetDataWatcher', () => {
    testShouldBeGeneratorFunction(searchEntitySetDataWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntitySetDataWatcher,
      searchEntitySetDataWorker,
      SEARCH_ENTITY_SET_DATA
    );
  });

  describe('searchEntitySetDataWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      searchOptions: randomUUID()
    };

    testShouldBeGeneratorFunction(searchEntitySetDataWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.searchOptions],
      latticeApiReqSeq: searchEntitySetData,
      workerSagaAction: searchEntitySetData(mockActionValue),
      workerSagaToTest: searchEntitySetDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.searchOptions],
      latticeApiReqSeq: searchEntitySetData,
      workerSagaAction: searchEntitySetData(mockActionValue),
      workerSagaToTest: searchEntitySetDataWorker
    });

  });

});
