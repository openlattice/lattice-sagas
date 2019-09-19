/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { SearchApi } from 'lattice';

import {
  EXECUTE_SEARCH,
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_NEIGHBORS_BULK,
  SEARCH_ENTITY_NEIGHBORS_FILTER,
  SEARCH_ENTITY_SET_DATA,
  SEARCH_ENTITY_SET_METADATA,
  executeSearch,
  searchEntityNeighbors,
  searchEntityNeighborsBulk,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
} from './SearchApiActions';

import {
  executeSearchWatcher,
  executeSearchWorker,
  searchEntityNeighborsBulkWatcher,
  searchEntityNeighborsBulkWorker,
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
  searchEntityNeighborsWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
  searchEntitySetMetaDataWatcher,
  searchEntitySetMetaDataWorker,
} from './SearchApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('SearchApiSagas', () => {

  describe('executeSearchWatcher', () => {
    testShouldBeGeneratorFunction(executeSearchWatcher);
    testWatcherSagaShouldTakeEvery(
      executeSearchWatcher,
      executeSearchWorker,
      EXECUTE_SEARCH
    );
  });

  describe('executeSearchWorker', () => {

    const mockActionValue = {
      entitySetIds: [randomUUID()],
      start: 0,
      maxHits: 100,
      constraints: [{
        searchTerm: `entity.${randomUUID()}:"${randomUUID()}"`,
        fuzzy: false
      }]
    };

    testShouldBeGeneratorFunction(executeSearchWorker);
    testShouldFailOnInvalidAction(executeSearchWorker, EXECUTE_SEARCH);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.executeSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: executeSearch,
      workerSagaAction: executeSearch({ searchConstraints: mockActionValue }),
      workerSagaToTest: executeSearchWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.executeSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: executeSearch,
      workerSagaAction: executeSearch({ searchConstraints: mockActionValue }),
      workerSagaToTest: executeSearchWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.executeSearch,
      latticeApiParams: [undefined],
      latticeApiReqSeq: executeSearch,
      workerSagaAction: executeSearch({ searchConstraints: undefined }),
      workerSagaToTest: executeSearchWorker
    });

  });

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
      latticeApiParams: [mockActionValue3.entitySetId, undefined],
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
   * SearchApiActions.searchEntityNeighborsWithFilter
   *
   */

  describe('searchEntityNeighborsWithFilterWatcher', () => {
    testShouldBeGeneratorFunction(searchEntityNeighborsWithFilterWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntityNeighborsWithFilterWatcher,
      searchEntityNeighborsWithFilterWorker,
      SEARCH_ENTITY_NEIGHBORS_FILTER,
    );
  });

  describe('searchEntityNeighborsWithFilterWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      filter: {
        entityKeyIds: [randomUUID()],
      },
    };

    testShouldBeGeneratorFunction(searchEntityNeighborsWithFilterWorker);
    testShouldFailOnInvalidAction(searchEntityNeighborsWithFilterWorker, SEARCH_ENTITY_NEIGHBORS_FILTER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntityNeighborsWithFilter,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter],
      latticeApiReqSeq: searchEntityNeighborsWithFilter,
      workerSagaAction: searchEntityNeighborsWithFilter(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWithFilterWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighborsWithFilter,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter],
      latticeApiReqSeq: searchEntityNeighborsWithFilter,
      workerSagaAction: searchEntityNeighborsWithFilter(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWithFilterWorker
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

    describe('SearchApi.searchEntitySetData()', () => {

      const mockActionValue = {
        entitySetId: randomUUID(),
        searchOptions: { searchTerm: randomUUID() },
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

    describe('SearchApi.advancedSearchEntitySetData()', () => {

      const mockActionValue = {
        entitySetId: randomUUID(),
        searchOptions: { searchFields: [{ searchTerm: randomUUID() }] },
      };

      testShouldBeGeneratorFunction(searchEntitySetDataWorker);
      testShouldFailOnInvalidAction(searchEntitySetDataWorker, SEARCH_ENTITY_SET_DATA);

      testWorkerSagaShouldHandleSuccessCase({
        latticeApi: SearchApi.advancedSearchEntitySetData,
        latticeApiParams: [mockActionValue.entitySetId, mockActionValue.searchOptions],
        latticeApiReqSeq: searchEntitySetData,
        workerSagaAction: searchEntitySetData(mockActionValue),
        workerSagaToTest: searchEntitySetDataWorker
      });

      testWorkerSagaShouldHandleFailureCase({
        latticeApi: SearchApi.advancedSearchEntitySetData,
        latticeApiParams: [mockActionValue.entitySetId, mockActionValue.searchOptions],
        latticeApiReqSeq: searchEntitySetData,
        workerSagaAction: searchEntitySetData(mockActionValue),
        workerSagaToTest: searchEntitySetDataWorker
      });

    });

  });

  /*
   *
   * SearchApi.searchEntitySetMetaData
   * SearchApiActions.searchEntitySetMetaData
   *
   */

  describe('searchEntitySetMetaDataWatcher', () => {
    testShouldBeGeneratorFunction(searchEntitySetMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntitySetMetaDataWatcher,
      searchEntitySetMetaDataWorker,
      SEARCH_ENTITY_SET_METADATA,
    );
  });

  describe('searchEntitySetMetaDataWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(searchEntitySetMetaDataWorker);
    testShouldFailOnInvalidAction(searchEntitySetMetaDataWorker, SEARCH_ENTITY_SET_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntitySetMetaData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetMetaData,
      workerSagaAction: searchEntitySetMetaData(mockActionValue),
      workerSagaToTest: searchEntitySetMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntitySetMetaData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetMetaData,
      workerSagaAction: searchEntitySetMetaData(mockActionValue),
      workerSagaToTest: searchEntitySetMetaDataWorker
    });

  });

});
