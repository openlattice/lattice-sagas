import randomUUID from 'uuid/v4';
import { AppApi } from 'lattice';

import {
  FETCH_APP,
  FETCH_APP_CONFIGS,
  FETCH_APP_TYPES,
  fetchApp,
  fetchAppConfigs,
  fetchAppTypes
} from './AppApiActionFactory';

import {
  fetchAppWatcher,
  fetchAppWorker,
  fetchAppConfigsWatcher,
  fetchAppConfigsWorker,
  fetchAppTypesWatcher,
  fetchAppTypesWorker
} from './AppApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/TestUtils';

describe('AppApiSagas', () => {

  describe('fetchAppWatcher', () => {
    testShouldBeGeneratorFunction(fetchAppWatcher);
    testWatcherSagaShouldTakeEvery(
      fetchAppWatcher,
      fetchAppWorker,
      FETCH_APP
    );
  });

  describe('fetchAppWorker', () => {

    const mockActionValue = {
      id: randomUUID(),
      value: 'name'
    };

    testShouldBeGeneratorFunction(fetchAppWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppByName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchApp,
      workerSagaAction: fetchApp(mockActionValue),
      workerSagaToTest: fetchAppWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppByName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchApp,
      workerSagaAction: fetchApp(mockActionValue),
      workerSagaToTest: fetchAppWorker
    });
  });

  describe('fetchAppConfigsWatcher', () => {
    testShouldBeGeneratorFunction(fetchAppConfigsWatcher);
    testWatcherSagaShouldTakeEvery(
      fetchAppConfigsWatcher,
      fetchAppConfigsWorker,
      FETCH_APP_CONFIGS
    );
  });

  describe('fetchAppConfigs', () => {

    const mockActionValue = {
      id: randomUUID(),
      value: randomUUID()
    };

    testShouldBeGeneratorFunction(fetchAppConfigsWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getConfigurations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchAppConfigs,
      workerSagaAction: fetchAppConfigs(mockActionValue),
      workerSagaToTest: fetchAppConfigsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getConfigurations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchAppConfigs,
      workerSagaAction: fetchAppConfigs(mockActionValue),
      workerSagaToTest: fetchAppConfigsWorker
    });
  });

  describe('fetchAppTypesWatcher', () => {
    testShouldBeGeneratorFunction(fetchAppTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      fetchAppTypesWatcher,
      fetchAppTypesWorker,
      FETCH_APP_TYPES
    );
  });

  describe('fetchAppTypes', () => {

    const mockActionValue = {
      id: randomUUID(),
      value: [randomUUID(), randomUUID(), randomUUID()]
    };

    testShouldBeGeneratorFunction(fetchAppTypesWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppTypesForAppTypeIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchAppTypes,
      workerSagaAction: fetchAppTypes(mockActionValue),
      workerSagaToTest: fetchAppTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppTypesForAppTypeIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: fetchAppTypes,
      workerSagaAction: fetchAppTypes(mockActionValue),
      workerSagaToTest: fetchAppTypesWorker
    });
  });

});
