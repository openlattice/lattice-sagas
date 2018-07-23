/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { SearchApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntitySetData
} from './SearchApiActionFactory';


/*
 * SearchApi.searchEntityNeighbors
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
  const { entityId, entitySetId } = value;

  try {
    yield put(searchEntityNeighbors.request(id, value));
    response.data = yield call(SearchApi.searchEntityNeighbors, entitySetId, entityId);
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
 * SearchApi.searchEntitySetData
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
    response.data = yield call(SearchApi.searchEntitySetData, entitySetId, searchOptions);
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
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker
};
