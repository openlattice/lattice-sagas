/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AppApi } from 'lattice';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPES,
  getApp,
  getAppConfigs,
  getAppTypes
} from './AppApiActions';

/*
 * AppApi.getAppByName
 */

function* getAppWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP, getAppWorker);
}

function* getAppWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_APP)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id, value } = seqAction;
  if (value === null || value === undefined) {
    return {
      error: ERR_ACTION_VALUE_NOT_DEFINED
    };
  }

  const response :Object = {};

  try {
    yield put(getApp.request(id, value));
    response.data = yield call(AppApi.getAppByName, value);
    yield put(getApp.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getApp.failure(id, response.error));
  }
  finally {
    yield put(getApp.finally(id));
  }

  return response;
}

/*
 * AppApi.getConfigurations
 */

function* getAppConfigsWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP_CONFIGS, getAppConfigsWorker);
}

function* getAppConfigsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_APP_CONFIGS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id, value } = seqAction;
  if (value === null || value === undefined) {
    return {
      error: ERR_ACTION_VALUE_NOT_DEFINED
    };
  }

  const response :Object = {};

  try {
    yield put(getAppConfigs.request(id, value));
    response.data = yield call(AppApi.getConfigurations, value);
    yield put(getAppConfigs.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAppConfigs.failure(id, response.error));
  }
  finally {
    yield put(getAppConfigs.finally(id));
  }

  return response;
}

/*
 * AppApi.getAppTypesForAppTypeIds
 */

function* getAppTypesWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_APP_TYPES, getAppTypesWorker);
}

function* getAppTypesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_APP_TYPES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id, value } = seqAction;
  if (value === null || value === undefined) {
    return {
      error: ERR_ACTION_VALUE_NOT_DEFINED
    };
  }

  const response :Object = {};

  try {
    yield put(getAppTypes.request(id, value));
    response.data = yield call(AppApi.getAppTypesForAppTypeIds, value);
    yield put(getAppTypes.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAppTypes.failure(id, response.error));
  }
  finally {
    yield put(getAppTypes.finally(id));
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
