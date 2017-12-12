/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { SearchApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntitySetData
} from './SearchApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * SearchApi.searchEntityNeighbors
 */

function* searchEntityNeighborsWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_NEIGHBORS, searchEntityNeighborsWorker);
}

function* searchEntityNeighborsWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(searchEntityNeighbors.request(action.id, action.value));
    response.data = yield call(SearchApi.searchEntityNeighbors, action.value.entitySetId, action.value.entityId);
    yield put(searchEntityNeighbors.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntityNeighbors.failure(action.id, response.error));
  }
  finally {
    yield put(searchEntityNeighbors.finally(action.id));
  }

  return response;
}

/*
 * SearchApi.searchEntitySetData
 */

function* searchEntitySetDataWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ENTITY_SET_DATA, searchEntitySetDataWorker);
}

function* searchEntitySetDataWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(searchEntitySetData.request(action.id, action.value));
    response.data = yield call(SearchApi.searchEntitySetData, action.value.entitySetId, action.value.searchOptions);
    yield put(searchEntitySetData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchEntitySetData.failure(action.id, response.error));
  }
  finally {
    yield put(searchEntitySetData.finally(action.id));
  }

  return response;
}

export {
  searchEntityNeighborsWatcher,
  searchEntityNeighborsWorker,
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker
};
