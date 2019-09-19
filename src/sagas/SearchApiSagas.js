/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SearchApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ARRAY_TAG } from '../utils/Constants';
import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  EXECUTE_SEARCH,
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_NEIGHBORS_BULK,
  SEARCH_ENTITY_NEIGHBORS_FILTER,
  SEARCH_ENTITY_SET_DATA,
  executeSearch,
  searchEntityNeighbors,
  searchEntityNeighborsBulk,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
} from './SearchApiActions';

/*
 *
 * SearchApi.executeSearch()
 * SearchApiActions.executeSearch()
 *
 */

function* executeSearchWatcher() :Generator<*, void, *> {

  yield takeEvery(EXECUTE_SEARCH, executeSearchWorker);
}

function* executeSearchWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, EXECUTE_SEARCH)) {
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
  const { searchConstraints } = value;

  try {
    yield put(executeSearch.request(id, value));
    response.data = yield call(SearchApi.executeSearch, searchConstraints);
    yield put(executeSearch.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(executeSearch.failure(id, response.error));
  }
  finally {
    yield put(executeSearch.finally(id));
  }

  return response;
}

/*
 *
 * SearchApi.searchEntityNeighbors()
 * SearchApiActions.searchEntityNeighbors()
 *
 */

function* searchEntityNeighborsWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS, searchEntityNeighborsWorker);
}

function* searchEntityNeighborsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ENTITY_NEIGHBORS)) {
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
  const { entitySetId } = value;
  let { entityKeyId } = value;
  if (!entityKeyId && value.entityId) {
    // for backwards compatibility
    entityKeyId = value.entityId;
  }

  try {
    yield put(searchEntityNeighbors.request(id, value));
    response.data = yield call(SearchApi.searchEntityNeighbors, entitySetId, entityKeyId);
    yield put(searchEntityNeighbors.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntityNeighbors.failure(id, response.error));
  }
  finally {
    yield put(searchEntityNeighbors.finally(id));
  }

  return response;
}

/*
 *
 * SearchApi.searchEntityNeighborsBulk()
 * SearchApiActions.searchEntityNeighborsBulk()
 *
 */

function* searchEntityNeighborsBulkWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS_BULK, searchEntityNeighborsBulkWorker);
}

function* searchEntityNeighborsBulkWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ENTITY_NEIGHBORS_BULK)) {
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
  const { entityIds, entitySetId } = value;

  try {
    yield put(searchEntityNeighborsBulk.request(id, value));
    response.data = yield call(SearchApi.searchEntityNeighborsBulk, entitySetId, entityIds);
    yield put(searchEntityNeighborsBulk.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntityNeighborsBulk.failure(id, response.error));
  }
  finally {
    yield put(searchEntityNeighborsBulk.finally(id));
  }

  return response;
}

/*
 *
 * SearchApi.searchEntityNeighborsWithFilter()
 * SearchApiActions.searchEntityNeighborsWithFilter()
 *
 */

function* searchEntityNeighborsWithFilterWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS_FILTER, searchEntityNeighborsWithFilterWorker);
}

function* searchEntityNeighborsWithFilterWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ENTITY_NEIGHBORS_FILTER)) {
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
  const { entitySetId, filter } = value;

  try {
    yield put(searchEntityNeighborsWithFilter.request(id, value));
    response.data = yield call(SearchApi.searchEntityNeighborsWithFilter, entitySetId, filter);
    yield put(searchEntityNeighborsWithFilter.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntityNeighborsWithFilter.failure(id, response.error));
  }
  finally {
    yield put(searchEntityNeighborsWithFilter.finally(id));
  }

  return response;
}

/*
 *
 * SearchApi.advancedSearchEntitySetData()
 * SearchApi.searchEntitySetData()
 * SearchApiActions.searchEntitySetData()
 *
 */

function* searchEntitySetDataWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_SET_DATA, searchEntitySetDataWorker);
}

function* searchEntitySetDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ENTITY_SET_DATA)) {
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
  const { entitySetId, searchOptions } = value;

  try {
    yield put(searchEntitySetData.request(id, value));
    const { searchFields } = searchOptions;
    if (searchFields && Object.prototype.toString.call(searchFields) === ARRAY_TAG) {
      response.data = yield call(SearchApi.advancedSearchEntitySetData, entitySetId, searchOptions);
    }
    else {
      response.data = yield call(SearchApi.searchEntitySetData, entitySetId, searchOptions);
    }
    yield put(searchEntitySetData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntitySetData.failure(id, response.error));
  }
  finally {
    yield put(searchEntitySetData.finally(id));
  }

  return response;
}

export {
  executeSearchWatcher,
  executeSearchWorker,
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWorker,
  searchEntityNeighborsBulkWatcher,
  searchEntityNeighborsBulkWorker,
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
};
