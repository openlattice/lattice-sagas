/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SearchApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  SEARCH_ENTITY_SET_METADATA,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
} from './SearchApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * SearchApi.searchEntityNeighborsWithFilter
 * SearchApiActions.searchEntityNeighborsWithFilter
 *
 */

function* searchEntityNeighborsWithFilterWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_ENTITY_NEIGHBORS_WITH_FILTER)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(searchEntityNeighborsWithFilter.request(id, value));
    const { entitySetId, filter, idsOnly } = value;
    const response = yield call(SearchApi.searchEntityNeighborsWithFilter, entitySetId, filter, idsOnly);
    workerResponse = { data: response };
    yield put(searchEntityNeighborsWithFilter.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(searchEntityNeighborsWithFilter.failure(id, error));
  }
  finally {
    yield put(searchEntityNeighborsWithFilter.finally(id));
  }

  return workerResponse;
}

function* searchEntityNeighborsWithFilterWatcher() :Saga<*> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS_WITH_FILTER, searchEntityNeighborsWithFilterWorker);
}

/*
 *
 * SearchApi.searchEntitySetData
 * SearchApiActions.searchEntitySetData
 *
 */

function* searchEntitySetDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_ENTITY_SET_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(searchEntitySetData.request(id, value));
    const response = yield call(SearchApi.searchEntitySetData, value);
    workerResponse = { data: response };
    yield put(searchEntitySetData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(searchEntitySetData.failure(id, error));
  }
  finally {
    yield put(searchEntitySetData.finally(id));
  }

  return workerResponse;
}

function* searchEntitySetDataWatcher() :Saga<*> {

  yield takeEvery(SEARCH_ENTITY_SET_DATA, searchEntitySetDataWorker);
}

/*
 *
 * SearchApi.searchEntitySetMetaData
 * SearchApiActions.searchEntitySetMetaData
 *
 */

function* searchEntitySetMetaDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_ENTITY_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(searchEntitySetMetaData.request(id, value));
    const response = yield call(SearchApi.searchEntitySetMetaData, value);
    workerResponse = { data: response };
    yield put(searchEntitySetMetaData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(searchEntitySetMetaData.failure(id, error));
  }
  finally {
    yield put(searchEntitySetMetaData.finally(id));
  }

  return workerResponse;
}

function* searchEntitySetMetaDataWatcher() :Saga<*> {

  yield takeEvery(SEARCH_ENTITY_SET_METADATA, searchEntitySetMetaDataWorker);
}

export {
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
  searchEntitySetMetaDataWatcher,
  searchEntitySetMetaDataWorker,
};
