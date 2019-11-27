/*
 * @flow
 */

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
  SEARCH_ENTITY_SET_METADATA,
  executeSearch,
  searchEntityNeighbors,
  searchEntityNeighborsBulk,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
} from './SearchApiActions';

/*
 *
 * SearchApi.executeSearch
 * SearchApiActions.executeSearch
 *
 */

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
  const { searchOptions } = value;

  try {
    yield put(executeSearch.request(id, value));
    response.data = yield call(SearchApi.executeSearch, searchOptions);
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

function* executeSearchWatcher() :Generator<*, void, *> {

  yield takeEvery(EXECUTE_SEARCH, executeSearchWorker);
}

/*
 *
 * SearchApi.searchEntityNeighbors
 * SearchApiActions.searchEntityNeighbors
 *
 */

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

function* searchEntityNeighborsWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS, searchEntityNeighborsWorker);
}

/*
 *
 * SearchApi.searchEntityNeighborsBulk
 * SearchApiActions.searchEntityNeighborsBulk
 *
 */

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

function* searchEntityNeighborsBulkWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS_BULK, searchEntityNeighborsBulkWorker);
}

/*
 *
 * SearchApi.searchEntityNeighborsWithFilter
 * SearchApiActions.searchEntityNeighborsWithFilter
 *
 */

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
  const { entitySetId, filter, idsOnly } = value;

  try {
    yield put(searchEntityNeighborsWithFilter.request(id, value));
    response.data = yield call(SearchApi.searchEntityNeighborsWithFilter, entitySetId, filter, idsOnly);
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

function* searchEntityNeighborsWithFilterWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS_FILTER, searchEntityNeighborsWithFilterWorker);
}

/*
 *
 * SearchApi.advancedSearchEntitySetData
 * SearchApi.searchEntitySetData
 * SearchApiActions.searchEntitySetData
 *
 */

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

function* searchEntitySetDataWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_SET_DATA, searchEntitySetDataWorker);
}

/*
 *
 * SearchApi.searchEntitySetMetaData
 * SearchApiActions.searchEntitySetMetaData
 *
 */

function* searchEntitySetMetaDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ENTITY_SET_METADATA)) {
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
    yield put(searchEntitySetMetaData.request(id, value));
    response.data = yield call(SearchApi.searchEntitySetMetaData, value);
    yield put(searchEntitySetMetaData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntitySetMetaData.failure(id, response.error));
  }
  finally {
    yield put(searchEntitySetMetaData.finally(id));
  }

  return response;
}

function* searchEntitySetMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_SET_METADATA, searchEntitySetMetaDataWorker);
}

export {
  executeSearchWatcher,
  executeSearchWorker,
  searchEntityNeighborsBulkWatcher,
  searchEntityNeighborsBulkWorker,
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWithFilterWatcher,
  searchEntityNeighborsWithFilterWorker,
  searchEntityNeighborsWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker,
  searchEntitySetMetaDataWatcher,
  searchEntitySetMetaDataWorker,
};
