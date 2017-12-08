/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { SearchApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  SEARCH_ENTITY_SET_DATA,
  searchEntitySetData
} from './SearchApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

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
  searchEntitySetDataWatcher,
  searchEntitySetDataWorker
};
