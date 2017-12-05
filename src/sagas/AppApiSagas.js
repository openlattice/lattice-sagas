/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { AppApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_APP,
  FETCH_APP_CONFIGS,
  FETCH_APP_TYPES,
  fetchApp,
  fetchAppConfigs,
  fetchAppTypes
} from './AppApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

export function* fetchAppWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Response = {};

  try {
    yield put(fetchApp.request(action.id, action.value));
    response.data = yield call(AppApi.getAppByName, action.value);
    yield put(fetchApp.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(fetchApp.failure(action.id, response.error));
  }
  finally {
    yield put(fetchApp.finally(action.id));
  }

  return response;
}

export function* fetchAppWatcher() :Generator<*, *, *> {

  yield takeEvery(FETCH_APP, fetchAppWorker);
}

export function* fetchAppConfigsWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Object = {};

  try {
    yield put(fetchAppConfigs.request(action.id, action.value));
    response.data = yield call(AppApi.getConfigurations, action.value);
    yield put(fetchAppConfigs.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(fetchAppConfigs.failure(action.id, response.error));
  }
  finally {
    yield put(fetchAppConfigs.finally(action.id));
  }

  return response;
}

export function* fetchAppConfigsWatcher() :Generator<*, *, *> {

  yield takeEvery(FETCH_APP_CONFIGS, fetchAppConfigsWorker);
}

export function* fetchAppTypesWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Object = {};

  try {
    yield put(fetchAppTypes.request(action.id, action.value));
    response.data = yield call(AppApi.getAppTypesForAppTypeIds, action.value);
    yield put(fetchAppTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(fetchAppTypes.failure(action.id, response.error));
  }
  finally {
    yield put(fetchAppTypes.finally(action.id));
  }

  return response;
}

export function* fetchAppTypesWatcher() :Generator<*, *, *> {

  yield takeEvery(FETCH_APP_TYPES, fetchAppTypesWorker);
}
