/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { SearchApi } from 'lattice';

import {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntitySetData
} from './SearchApiActionFactory';

import {
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker
} from './SearchApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('SearchApiSagas', () => {

  /*
   *
   * SearchApiActionFactory.searchEntityNeighbors
   *
   */

  describe('searchEntityNeighborsWatcher', () => {
    testShouldBeGeneratorFunction(searchEntityNeighborsWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntityNeighborsWatcher,
      searchEntityNeighborsWorker,
      SEARCH_ENTITY_NEIGHBORS
    );
  });

  describe('searchEntityNeighborsWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityId: randomUUID()
    };

    testShouldBeGeneratorFunction(searchEntityNeighborsWorker);
    testShouldFailOnInvalidAction(searchEntityNeighborsWorker, SEARCH_ENTITY_NEIGHBORS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntityNeighbors,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityId],
      latticeApiReqSeq: searchEntityNeighbors,
      workerSagaAction: searchEntityNeighbors(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighbors,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityId],
      latticeApiReqSeq: searchEntityNeighbors,
      workerSagaAction: searchEntityNeighbors(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWorker
    });

  });

  /*
   *
   * SearchApiActionFactory.searchEntitySetData
   *
   */

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
    testShouldFailOnInvalidAction(searchEntitySetDataWorker, SEARCH_ENTITY_SET_DATA);

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
