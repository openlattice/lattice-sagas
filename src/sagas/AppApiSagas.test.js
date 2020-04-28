/*
 * @flow
 */

import { v4 as uuid } from 'uuid';
import { AppApi } from 'lattice';

import {
  GET_ALL_APPS,
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPE,
  GET_APP_TYPES,
  INSTALL_APP,
  getAllApps,
  getApp,
  getAppConfigs,
  getAppType,
  getAppTypes,
  installApp,
} from './AppApiActions';

import {
  getAllAppsWatcher,
  getAllAppsWorker,
  getAppWatcher,
  getAppWorker,
  getAppConfigsWatcher,
  getAppConfigsWorker,
  getAppTypeWatcher,
  getAppTypeWorker,
  getAppTypesWatcher,
  getAppTypesWorker,
  installAppWatcher,
  installAppWorker,
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
   * AppApiActions.getAllApps
   *
   */

  describe('getAllAppsWatcher', () => {
    testShouldBeGeneratorFunction(getAllAppsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllAppsWatcher,
      getAllAppsWorker,
      GET_ALL_APPS,
    );
  });

  describe('getAllAppsWorker', () => {

    testShouldBeGeneratorFunction(getAllAppsWorker);
    testShouldFailOnInvalidAction(getAllAppsWorker, GET_ALL_APPS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAllApps,
      latticeApiParams: [],
      latticeApiReqSeq: getAllApps,
      workerSagaAction: getAllApps(),
      workerSagaToTest: getAllAppsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAllApps,
      latticeApiParams: [],
      latticeApiReqSeq: getAllApps,
      workerSagaAction: getAllApps(),
      workerSagaToTest: getAllAppsWorker,
    });
  });

  /*
   *
   * AppApiActions.getApp
   *
   */

  describe('getAppWatcher', () => {
    testShouldBeGeneratorFunction(getAppWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppWatcher,
      getAppWorker,
      GET_APP,
    );
  });

  describe('getAppWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAppWorker);
    testShouldFailOnInvalidAction(getAppWorker, GET_APP);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getApp,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getApp,
      workerSagaAction: getApp(mockActionValue),
      workerSagaToTest: getAppWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getApp,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getApp,
      workerSagaAction: getApp(mockActionValue),
      workerSagaToTest: getAppWorker,
    });
  });

  /*
   *
   * AppApiActions.getAppConfigs
   *
   */

  describe('getAppConfigsWatcher', () => {
    testShouldBeGeneratorFunction(getAppConfigsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppConfigsWatcher,
      getAppConfigsWorker,
      GET_APP_CONFIGS,
    );
  });

  describe('getAppConfigsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAppConfigsWorker);
    testShouldFailOnInvalidAction(getAppConfigsWorker, GET_APP_CONFIGS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppConfigs,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppConfigs,
      workerSagaAction: getAppConfigs(mockActionValue),
      workerSagaToTest: getAppConfigsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppConfigs,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppConfigs,
      workerSagaAction: getAppConfigs(mockActionValue),
      workerSagaToTest: getAppConfigsWorker,
    });
  });

  /*
   *
   * AppApiActions.getAppType
   *
   */

  describe('getAppTypeWatcher', () => {
    testShouldBeGeneratorFunction(getAppTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppTypeWatcher,
      getAppTypeWorker,
      GET_APP_TYPE,
    );
  });

  describe('getAppTypeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAppTypeWorker);
    testShouldFailOnInvalidAction(getAppTypeWorker, GET_APP_TYPE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppType,
      workerSagaAction: getAppType(mockActionValue),
      workerSagaToTest: getAppTypeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppType,
      workerSagaAction: getAppType(mockActionValue),
      workerSagaToTest: getAppTypeWorker,
    });
  });

  /*
   *
   * AppApiActions.getAppTypes
   *
   */

  describe('getAppTypesWatcher', () => {
    testShouldBeGeneratorFunction(getAppTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAppTypesWatcher,
      getAppTypesWorker,
      GET_APP_TYPES,
    );
  });

  describe('getAppTypesWorker', () => {

    const mockActionValue = [uuid(), uuid(), uuid()];

    testShouldBeGeneratorFunction(getAppTypesWorker);
    testShouldFailOnInvalidAction(getAppTypesWorker, GET_APP_TYPES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.getAppTypes,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppTypes,
      workerSagaAction: getAppTypes(mockActionValue),
      workerSagaToTest: getAppTypesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.getAppTypes,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAppTypes,
      workerSagaAction: getAppTypes(mockActionValue),
      workerSagaToTest: getAppTypesWorker,
    });
  });

  /*
   *
   * AppApiActions.installApp
   *
   */

  describe('installAppWatcher', () => {
    testShouldBeGeneratorFunction(installAppWatcher);
    testWatcherSagaShouldTakeEvery(
      installAppWatcher,
      installAppWorker,
      INSTALL_APP,
    );
  });

  describe('installAppWorker', () => {

    const mockActionValue = {
      appId: uuid(),
      organizationId: uuid(),
      prefix: uuid(),
    };

    testShouldBeGeneratorFunction(installAppWorker);
    testShouldFailOnInvalidAction(installAppWorker, INSTALL_APP);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AppApi.installApp,
      latticeApiParams: [mockActionValue.appId, mockActionValue.organizationId, mockActionValue.prefix],
      latticeApiReqSeq: installApp,
      workerSagaAction: installApp(mockActionValue),
      workerSagaToTest: installAppWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AppApi.installApp,
      latticeApiParams: [mockActionValue.appId, mockActionValue.organizationId, mockActionValue.prefix],
      latticeApiReqSeq: installApp,
      workerSagaAction: installApp(mockActionValue),
      workerSagaToTest: installAppWorker,
    });
  });

});
