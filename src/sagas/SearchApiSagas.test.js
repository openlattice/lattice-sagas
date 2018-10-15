/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { SearchApi } from 'lattice';

import {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_NEIGHBORS_BULK,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntityNeighborsBulk,
  searchEntitySetData,
} from './SearchApiActions';

import {
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWorker,
  searchEntityNeighborsBulkWatcher,
  searchEntityNeighborsBulkWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
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
   * SearchApiActions.searchEntityNeighbors
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

    /*
     * TODO: delete everything below, only for backwards compatibility
     */

    const mockActionValue2 = {
      entityId: randomUUID(),
      entityKeyId: randomUUID(),
      entitySetId: randomUUID(),
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntityNeighbors,
      latticeApiParams: [mockActionValue2.entitySetId, mockActionValue2.entityKeyId],
      latticeApiReqSeq: searchEntityNeighbors,
      workerSagaAction: searchEntityNeighbors(mockActionValue2),
      workerSagaToTest: searchEntityNeighborsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighbors,
      latticeApiParams: [mockActionValue2.entitySetId, mockActionValue2.entityKeyId],
      latticeApiReqSeq: searchEntityNeighbors,
      workerSagaAction: searchEntityNeighbors(mockActionValue2),
      workerSagaToTest: searchEntityNeighborsWorker
    });

    const mockActionValue3 = {
      entitySetId: randomUUID(),
    };

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighbors,
      latticeApiParams: [mockActionValue3.entitySetId],
      latticeApiReqSeq: searchEntityNeighbors,
      workerSagaAction: searchEntityNeighbors(mockActionValue3),
      workerSagaToTest: searchEntityNeighborsWorker
    });

  });

  /*
   *
   * SearchApiActions.searchEntityNeighborsBulk
   *
   */

  describe('searchEntityNeighborsBulkWatcher', () => {
    testShouldBeGeneratorFunction(searchEntityNeighborsBulkWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntityNeighborsBulkWatcher,
      searchEntityNeighborsBulkWorker,
      SEARCH_ENTITY_NEIGHBORS_BULK
    );
  });

  describe('searchEntityNeighborsBulkWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityIds: [randomUUID()]
    };

    testShouldBeGeneratorFunction(searchEntityNeighborsBulkWorker);
    testShouldFailOnInvalidAction(searchEntityNeighborsBulkWorker, SEARCH_ENTITY_NEIGHBORS_BULK);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntityNeighborsBulk,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityIds],
      latticeApiReqSeq: searchEntityNeighborsBulk,
      workerSagaAction: searchEntityNeighborsBulk(mockActionValue),
      workerSagaToTest: searchEntityNeighborsBulkWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighborsBulk,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityIds],
      latticeApiReqSeq: searchEntityNeighborsBulk,
      workerSagaAction: searchEntityNeighborsBulk(mockActionValue),
      workerSagaToTest: searchEntityNeighborsBulkWorker
    });

  });

  /*
   *
   * SearchApiActions.searchEntitySetData
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
