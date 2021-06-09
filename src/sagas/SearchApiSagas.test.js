/*
 * @flow
 */

import { SearchApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  SEARCH_DATA_SET_METADATA,
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  searchDataSetMetadata,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
} from './SearchApiActions';
import {
  searchDataSetMetadataWatcher,
  searchDataSetMetadataWorker,
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
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
   * SearchApi.searchDataSetMetadata
   * SearchApiActions.searchDataSetMetadata
   *
   */

  describe('searchDataSetMetadataWatcher', () => {
    testShouldBeGeneratorFunction(searchDataSetMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      searchDataSetMetadataWatcher,
      searchDataSetMetadataWorker,
      SEARCH_DATA_SET_METADATA,
    );
  });

  describe('searchDataSetMetadataWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(searchDataSetMetadataWorker);
    testShouldFailOnInvalidAction(searchDataSetMetadataWorker, SEARCH_DATA_SET_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchDataSetMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchDataSetMetadata,
      workerSagaAction: searchDataSetMetadata(mockActionValue),
      workerSagaToTest: searchDataSetMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchDataSetMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchDataSetMetadata,
      workerSagaAction: searchDataSetMetadata(mockActionValue),
      workerSagaToTest: searchDataSetMetadataWorker,
    });
  });

  /*
   *
   * SearchApi.searchEntityNeighborsWithFilter
   * SearchApiActions.searchEntityNeighborsWithFilter
   *
   */

  describe('searchEntityNeighborsWithFilterWatcher', () => {
    testShouldBeGeneratorFunction(searchEntityNeighborsWithFilterWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntityNeighborsWithFilterWatcher,
      searchEntityNeighborsWithFilterWorker,
      SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
    );
  });

  describe('searchEntityNeighborsWithFilterWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      filter: uuid(),
      idsOnly: uuid(),
    };

    testShouldBeGeneratorFunction(searchEntityNeighborsWithFilterWorker);
    testShouldFailOnInvalidAction(searchEntityNeighborsWithFilterWorker, SEARCH_ENTITY_NEIGHBORS_WITH_FILTER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntityNeighborsWithFilter,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.idsOnly],
      latticeApiReqSeq: searchEntityNeighborsWithFilter,
      workerSagaAction: searchEntityNeighborsWithFilter(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWithFilterWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntityNeighborsWithFilter,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.idsOnly],
      latticeApiReqSeq: searchEntityNeighborsWithFilter,
      workerSagaAction: searchEntityNeighborsWithFilter(mockActionValue),
      workerSagaToTest: searchEntityNeighborsWithFilterWorker,
    });
  });

  /*
   *
   * SearchApi.searchEntitySetData
   * SearchApiActions.searchEntitySetData
   *
   */

  describe('searchEntitySetDataWatcher', () => {
    testShouldBeGeneratorFunction(searchEntitySetDataWatcher);
    testWatcherSagaShouldTakeEvery(
      searchEntitySetDataWatcher,
      searchEntitySetDataWorker,
      SEARCH_ENTITY_SET_DATA,
    );
  });

  describe('searchEntitySetDataWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(searchEntitySetDataWorker);
    testShouldFailOnInvalidAction(searchEntitySetDataWorker, SEARCH_ENTITY_SET_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntitySetData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetData,
      workerSagaAction: searchEntitySetData(mockActionValue),
      workerSagaToTest: searchEntitySetDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntitySetData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetData,
      workerSagaAction: searchEntitySetData(mockActionValue),
      workerSagaToTest: searchEntitySetDataWorker,
    });
  });

});
