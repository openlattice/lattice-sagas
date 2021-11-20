/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SearchApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  COUNT_ENTITIES_IN_SETS,
  SEARCH_DATA_SET_METADATA,
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  countEntitiesInSets,
  searchDataSetMetadata,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
} from './SearchApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * SearchApi.countEntitiesInSets
 * SearchApiActions.countEntitiesInSets
 *
 */

function* countEntitiesInSetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_DATA_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(countEntitiesInSets.request(id, value));
    const { entityTypeId, entitySetIds } = value;
    const response = yield call(SearchApi.countEntitiesInSets, entityTypeId, entitySetIds);
    workerResponse = { data: response };
    yield put(countEntitiesInSets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(countEntitiesInSets.failure(id, error));
  }
  finally {
    yield put(countEntitiesInSets.finally(id));
  }

  return workerResponse;
}

function* countEntitiesInSetsWatcher() :Saga<*> {

  yield takeEvery(COUNT_ENTITIES_IN_SETS, countEntitiesInSetsWorker);
}

/*
 *
 * SearchApi.searchDataSetMetadata
 * SearchApiActions.searchDataSetMetadata
 *
 */

function* searchDataSetMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_DATA_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(searchDataSetMetadata.request(id, value));
    const response = yield call(SearchApi.searchDataSetMetadata, value);
    workerResponse = { data: response };
    yield put(searchDataSetMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(searchDataSetMetadata.failure(id, error));
  }
  finally {
    yield put(searchDataSetMetadata.finally(id));
  }

  return workerResponse;
}

function* searchDataSetMetadataWatcher() :Saga<*> {

  yield takeEvery(SEARCH_DATA_SET_METADATA, searchDataSetMetadataWorker);
}

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

export {
  countEntitiesInSetsWatcher,
  countEntitiesInSetsWorker,
  searchDataSetMetadataWatcher,
  searchDataSetMetadataWorker,
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
};
