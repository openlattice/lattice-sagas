/*
 * @flow
 */

import { DataSetsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS,
  getOrganizationDataSets,
  getOrganizationDataSetsWithColumns,
} from './DataSetsApiActions';
import {
  getOrganizationDataSetsWatcher,
  getOrganizationDataSetsWorker,
  getOrganizationDataSetsWithColumnsWatcher,
  getOrganizationDataSetsWithColumnsWorker,
} from './DataSetsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('DataSetsApiSagas', () => {

  /*
   *
   * DataSetsApi.getOrganizationDataSets
   * DataSetsApiActions.getOrganizationDataSets
   *
   */

  describe('getOrganizationDataSetsWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationDataSetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationDataSetsWatcher,
      getOrganizationDataSetsWorker,
      GET_ORGANIZATION_DATA_SETS,
    );
  });

  describe('getOrganizationDataSetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationDataSetsWorker);
    testShouldFailOnInvalidAction(getOrganizationDataSetsWorker, GET_ORGANIZATION_DATA_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetsApi.getOrganizationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDataSets,
      workerSagaAction: getOrganizationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetsApi.getOrganizationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDataSets,
      workerSagaAction: getOrganizationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWorker,
    });
  });

  /*
   *
   * DataSetsApi.getOrganizationDataSetsWithColumns
   * DataSetsApiActions.getOrganizationDataSetsWithColumns
   *
   */

  describe('getOrganizationDataSetsWithColumnsWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationDataSetsWithColumnsWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationDataSetsWithColumnsWatcher,
      getOrganizationDataSetsWithColumnsWorker,
      GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS,
    );
  });

  describe('getOrganizationDataSetsWithColumnsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationDataSetsWithColumnsWorker);
    testShouldFailOnInvalidAction(getOrganizationDataSetsWithColumnsWorker, GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetsApi.getOrganizationDataSetsWithColumns,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDataSetsWithColumns,
      workerSagaAction: getOrganizationDataSetsWithColumns(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWithColumnsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetsApi.getOrganizationDataSetsWithColumns,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDataSetsWithColumns,
      workerSagaAction: getOrganizationDataSetsWithColumns(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWithColumnsWorker,
    });
  });

});
