/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PersistentSearchApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  CREATE_PERSISTENT_SEARCH,
  EXPIRE_PERSISTENT_SEARCH,
  GET_PERSISTENT_SEARCHES,
  UPDATE_PERSISTENT_SEARCH_EXPIRATION,
  createPersistentSearch,
  expirePersistentSearch,
  getPersistentSearches,
  updatePersistentSearchExpiration,
} from './PersistentSearchApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * PersistentSearchApi.createPersistentSearch
 * PersistentSearchApiActions.createPersistentSearch
 *
 */

function* createPersistentSearchWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_PERSISTENT_SEARCH)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createPersistentSearch.request(id, value));
    const response = yield call(PersistentSearchApi.createPersistentSearch, value);
    workerResponse = { data: response };
    yield put(createPersistentSearch.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createPersistentSearch.failure(id, error));
  }
  finally {
    yield put(createPersistentSearch.finally(id));
  }

  return workerResponse;
}

function* createPersistentSearchWatcher() :Saga<*> {

  yield takeEvery(CREATE_PERSISTENT_SEARCH, createPersistentSearchWorker);
}

/*
 *
 * PersistentSearchApi.expirePersistentSearch
 * PersistentSearchApiActions.expirePersistentSearch
 *
 */

function* expirePersistentSearchWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, EXPIRE_PERSISTENT_SEARCH)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(expirePersistentSearch.request(id, value));
    const response = yield call(PersistentSearchApi.expirePersistentSearch, value);
    workerResponse = { data: response };
    yield put(expirePersistentSearch.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(expirePersistentSearch.failure(id, error));
  }
  finally {
    yield put(expirePersistentSearch.finally(id));
  }

  return workerResponse;
}

function* expirePersistentSearchWatcher() :Saga<*> {

  yield takeEvery(EXPIRE_PERSISTENT_SEARCH, expirePersistentSearchWorker);
}

/*
 *
 * PersistentSearchApi.getPersistentSearches
 * PersistentSearchApiActions.getPersistentSearches
 *
 */

function* getPersistentSearchesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_PERSISTENT_SEARCHES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getPersistentSearches.request(id, value));
    const response = yield call(PersistentSearchApi.getPersistentSearches, value);
    workerResponse = { data: response };
    yield put(getPersistentSearches.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getPersistentSearches.failure(id, error));
  }
  finally {
    yield put(getPersistentSearches.finally(id));
  }

  return workerResponse;
}

function* getPersistentSearchesWatcher() :Saga<*> {

  yield takeEvery(GET_PERSISTENT_SEARCHES, getPersistentSearchesWorker);
}

/*
 *
 * PersistentSearchApi.getPersistentSearches
 * PersistentSearchApiActions.getPersistentSearches
 *
 */

function* updatePersistentSearchExpirationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_PERSISTENT_SEARCH_EXPIRATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updatePersistentSearchExpiration.request(id, value));

    const { persistentSearchId, expiration } = value;
    const response = yield call(PersistentSearchApi.updatePersistentSearchExpiration, persistentSearchId, expiration);
    workerResponse = { data: response };
    yield put(updatePersistentSearchExpiration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updatePersistentSearchExpiration.failure(id, error));
  }
  finally {
    yield put(updatePersistentSearchExpiration.finally(id));
  }

  return workerResponse;
}

function* updatePersistentSearchExpirationWatcher() :Saga<*> {

  yield takeEvery(UPDATE_PERSISTENT_SEARCH_EXPIRATION, updatePersistentSearchExpirationWorker);
}

export {
  createPersistentSearchWatcher,
  createPersistentSearchWorker,
  expirePersistentSearchWatcher,
  expirePersistentSearchWorker,
  getPersistentSearchesWatcher,
  getPersistentSearchesWorker,
  updatePersistentSearchExpirationWatcher,
  updatePersistentSearchExpirationWorker,
};
