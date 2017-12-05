/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { AppApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPES,
  getApp,
  getAppConfigs,
  getAppTypes
} from './AppApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * AppApi.getAppByName
 */

function* getAppWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP, getAppWorker);
}

function* getAppWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Response = {};

  try {
    yield put(getApp.request(action.id, action.value));
    response.data = yield call(AppApi.getAppByName, action.value);
    yield put(getApp.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getApp.failure(action.id, response.error));
  }
  finally {
    yield put(getApp.finally(action.id));
  }

  return response;
}

/*
 * AppApi.getConfigurations
 */

function* getAppConfigsWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP_CONFIGS, getAppConfigsWorker);
}

function* getAppConfigsWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Object = {};

  try {
    yield put(getAppConfigs.request(action.id, action.value));
    response.data = yield call(AppApi.getConfigurations, action.value);
    yield put(getAppConfigs.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAppConfigs.failure(action.id, response.error));
  }
  finally {
    yield put(getAppConfigs.finally(action.id));
  }

  return response;
}

/*
 * AppApi.getAppTypesForAppTypeIds
 */

function* getAppTypesWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP_TYPES, getAppTypesWorker);
}

function* getAppTypesWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Object = {};

  try {
    yield put(getAppTypes.request(action.id, action.value));
    response.data = yield call(AppApi.getAppTypesForAppTypeIds, action.value);
    yield put(getAppTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAppTypes.failure(action.id, response.error));
  }
  finally {
    yield put(getAppTypes.finally(action.id));
  }

  return response;
}

/*
 *
 * exports
 *
 */

export {
  getAppWatcher,
  getAppWorker,
  getAppConfigsWatcher,
  getAppConfigsWorker,
  getAppTypesWatcher,
  getAppTypesWorker
};
