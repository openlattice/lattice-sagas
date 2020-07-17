/*
 * @flow
 */

import { DataSetsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_ORGANIZATION_DATA_SET,
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SET_DATA,
  getOrganizationDataSet,
  getOrganizationDataSets,
  getOrganizationDataSetData,
} from './DataSetsApiActions';
import {
  getOrganizationDataSetWatcher,
  getOrganizationDataSetWorker,
  getOrganizationDataSetsWatcher,
  getOrganizationDataSetsWorker,
  getOrganizationDataSetDataWatcher,
  getOrganizationDataSetDataWorker,
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
   * DataSetsApi.getOrganizationDataSet
   * DataSetsApiActions.getOrganizationDataSet
   *
   */

  describe('getOrganizationDataSetWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationDataSetWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationDataSetWatcher,
      getOrganizationDataSetWorker,
      GET_ORGANIZATION_DATA_SET,
    );
  });

  describe('getOrganizationDataSetWorker', () => {

    const mockActionValue = {
      columns: true,
      dataSetId: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(getOrganizationDataSetWorker);
    testShouldFailOnInvalidAction(getOrganizationDataSetWorker, GET_ORGANIZATION_DATA_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetsApi.getOrganizationDataSet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.dataSetId, mockActionValue.columns],
      latticeApiReqSeq: getOrganizationDataSet,
      workerSagaAction: getOrganizationDataSet(mockActionValue),
      workerSagaToTest: getOrganizationDataSetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetsApi.getOrganizationDataSet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.dataSetId, mockActionValue.columns],
      latticeApiReqSeq: getOrganizationDataSet,
      workerSagaAction: getOrganizationDataSet(mockActionValue),
      workerSagaToTest: getOrganizationDataSetWorker,
    });
  });

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

    const mockActionValue = {
      columns: true,
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(getOrganizationDataSetsWorker);
    testShouldFailOnInvalidAction(getOrganizationDataSetsWorker, GET_ORGANIZATION_DATA_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetsApi.getOrganizationDataSets,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.columns],
      latticeApiReqSeq: getOrganizationDataSets,
      workerSagaAction: getOrganizationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetsApi.getOrganizationDataSets,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.columns],
      latticeApiReqSeq: getOrganizationDataSets,
      workerSagaAction: getOrganizationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationDataSetsWorker,
    });
  });

  /*
   *
   * DataSetsApi.getOrganizationDataSetData
   * DataSetsApiActions.getOrganizationDataSetData
   *
   */

  describe('getOrganizationDataSetDataWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationDataSetDataWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationDataSetDataWatcher,
      getOrganizationDataSetDataWorker,
      GET_ORGANIZATION_DATA_SET_DATA,
    );
  });

  describe('getOrganizationDataSetDataWorker', () => {

    const mockActionValue = {
      count: 97,
      dataSetId: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(getOrganizationDataSetDataWorker);
    testShouldFailOnInvalidAction(getOrganizationDataSetDataWorker, GET_ORGANIZATION_DATA_SET_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetsApi.getOrganizationDataSetData,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.dataSetId, mockActionValue.count],
      latticeApiReqSeq: getOrganizationDataSetData,
      workerSagaAction: getOrganizationDataSetData(mockActionValue),
      workerSagaToTest: getOrganizationDataSetDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetsApi.getOrganizationDataSetData,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.dataSetId, mockActionValue.count],
      latticeApiReqSeq: getOrganizationDataSetData,
      workerSagaAction: getOrganizationDataSetData(mockActionValue),
      workerSagaToTest: getOrganizationDataSetDataWorker,
    });
  });

});
