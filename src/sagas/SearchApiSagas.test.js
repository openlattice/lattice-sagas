/*
 * @flow
 */

import { SearchApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  SEARCH_ENTITY_SET_METADATA,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
} from './SearchApiActions';
import {
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(searchEntitySetMetaDataWorker);
    testShouldFailOnInvalidAction(searchEntitySetMetaDataWorker, SEARCH_ENTITY_SET_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: SearchApi.searchEntitySetMetaData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetMetaData,
      workerSagaAction: searchEntitySetMetaData(mockActionValue),
      workerSagaToTest: searchEntitySetMetaDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: SearchApi.searchEntitySetMetaData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchEntitySetMetaData,
      workerSagaAction: searchEntitySetMetaData(mockActionValue),
      workerSagaToTest: searchEntitySetMetaDataWorker,
    });
  });

});
