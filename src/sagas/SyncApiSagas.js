/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { SyncApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_CURRENT_SYNC_ID,
  getCurrentSyncId
} from './SyncApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * SyncApi.getCurrentSyncId
 */

function* getCurrentSyncIdWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_CURRENT_SYNC_ID, getCurrentSyncIdWorker);
}

function* getCurrentSyncIdWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getCurrentSyncId.request(action.id, action.value));
    response.data = yield call(SyncApi.getCurrentSyncId, action.value);
    yield put(getCurrentSyncId.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getCurrentSyncId.failure(action.id, response.error));
  }
  finally {
    yield put(getCurrentSyncId.finally(action.id));
  }

  return response;
}

export {
  getCurrentSyncIdWatcher,
  getCurrentSyncIdWorker
};
