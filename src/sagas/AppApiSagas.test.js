import randomUUID from 'uuid/v4';
import { AppApi } from 'lattice';

import {
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPES,
  getApp,
  getAppConfigs,
  getAppTypes
} from './AppApiActionFactory';

import {
  getAppWatcher,
  getAppWorker,
  getAppConfigsWatcher,
  getAppConfigsWorker,
  getAppTypesWatcher,
  getAppTypesWorker
} from './AppApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('AppApiSagas', () => {

  /*
   *
   * AppApiActionFactory.getApp
   *
   */

  describe('getAppWatcher', () => {
    testShouldBeGeneratorFunction(getAppWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppWatcher,
      getAppWorker,
      GET_APP
    );
  });

  describe('getAppWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getAppWorker);
    testShouldFailOnInvalidAction(getAppWorker, GET_APP);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppByName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getApp,
      workerSagaAction: getApp(mockActionValue),
      workerSagaToTest: getAppWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppByName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getApp,
      workerSagaAction: getApp(mockActionValue),
      workerSagaToTest: getAppWorker
    });
  });

  /*
   *
   * AppApiActionFactory.getAppConfigs
   *
   */

  describe('getAppConfigsWatcher', () => {
    testShouldBeGeneratorFunction(getAppConfigsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppConfigsWatcher,
      getAppConfigsWorker,
      GET_APP_CONFIGS
    );
  });

  describe('getAppConfigsWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getAppConfigsWorker);
    testShouldFailOnInvalidAction(getAppConfigsWorker, GET_APP_CONFIGS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getConfigurations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppConfigs,
      workerSagaAction: getAppConfigs(mockActionValue),
      workerSagaToTest: getAppConfigsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getConfigurations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppConfigs,
      workerSagaAction: getAppConfigs(mockActionValue),
      workerSagaToTest: getAppConfigsWorker
    });
  });

  /*
   *
   * AppApiActionFactory.getAppTypes
   *
   */

  describe('getAppTypesWatcher', () => {
    testShouldBeGeneratorFunction(getAppTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppTypesWatcher,
      getAppTypesWorker,
      GET_APP_TYPES
    );
  });

  describe('getAppTypesWorker', () => {

    const mockActionValue = [randomUUID(), randomUUID(), randomUUID()];

    testShouldBeGeneratorFunction(getAppTypesWorker);
    testShouldFailOnInvalidAction(getAppTypesWorker, GET_APP_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppTypesForAppTypeIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppTypes,
      workerSagaAction: getAppTypes(mockActionValue),
      workerSagaToTest: getAppTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppTypesForAppTypeIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppTypes,
      workerSagaAction: getAppTypes(mockActionValue),
      workerSagaToTest: getAppTypesWorker
    });
  });

});
