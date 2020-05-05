/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AppApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

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

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * AppApi.getAllApps
 * AppApiActions.getAllApps
 *
 */

function* getAllAppsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_APPS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllApps.request(id));
    const response = yield call(AppApi.getAllApps);
    workerResponse = { data: response };
    yield put(getAllApps.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllApps.failure(id, error));
  }
  finally {
    yield put(getAllApps.finally(id));
  }

  return workerResponse;
}

function* getAllAppsWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_APPS, getAllAppsWorker);
}

/*
 *
 * AppApi.getApp
 * AppApiActions.getApp
 *
 */

function* getAppWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_APP)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getApp.request(id, value));
    const response = yield call(AppApi.getApp, value);
    workerResponse = { data: response };
    yield put(getApp.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getApp.failure(id, error));
  }
  finally {
    yield put(getApp.finally(id));
  }

  return workerResponse;
}

function* getAppWatcher() :Saga<*> {

  yield takeEvery(GET_APP, getAppWorker);
}

/*
 *
 * AppApi.getAppConfigs
 * AppApiActions.getAppConfigs
 *
 */

function* getAppConfigsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_APP_CONFIGS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAppConfigs.request(id, value));
    const response = yield call(AppApi.getAppConfigs, value);
    workerResponse = { data: response };
    yield put(getAppConfigs.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAppConfigs.failure(id, error));
  }
  finally {
    yield put(getAppConfigs.finally(id));
  }

  return workerResponse;
}

function* getAppConfigsWatcher() :Saga<*> {

  yield takeEvery(GET_APP_CONFIGS, getAppConfigsWorker);
}

/*
 *
 * AppApi.getAppType
 * AppApiActions.getAppType
 *
 */

function* getAppTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_APP_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAppType.request(id, value));
    const response = yield call(AppApi.getAppType, value);
    workerResponse = { data: response };
    yield put(getAppType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAppType.failure(id, error));
  }
  finally {
    yield put(getAppType.finally(id));
  }

  return workerResponse;
}

function* getAppTypeWatcher() :Saga<*> {

  yield takeEvery(GET_APP_TYPE, getAppTypeWorker);
}

/*
 *
 * AppApi.getAppTypes
 * AppApiActions.getAppTypes
 *
 */

function* getAppTypesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_APP_TYPES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAppTypes.request(id, value));
    const response = yield call(AppApi.getAppTypes, value);
    workerResponse = { data: response };
    yield put(getAppTypes.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAppTypes.failure(id, error));
  }
  finally {
    yield put(getAppTypes.finally(id));
  }

  return workerResponse;
}

function* getAppTypesWatcher() :Saga<*> {

  yield takeEvery(GET_APP_TYPES, getAppTypesWorker);
}

/*
 *
 * AppApi.installApp
 * AppApiActions.installApp
 *
 */

function* installAppWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, INSTALL_APP)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(installApp.request(id, value));
    const { appId, organizationId, prefix } = value;
    const response = yield call(AppApi.installApp, appId, organizationId, prefix);
    workerResponse = { data: response };
    yield put(installApp.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(installApp.failure(id, error));
  }
  finally {
    yield put(installApp.finally(id));
  }

  return workerResponse;
}

function* installAppWatcher() :Saga<*> {

  yield takeEvery(INSTALL_APP, installAppWorker);
}

/*
 *
 * exports
 *
 */

export {
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
};
