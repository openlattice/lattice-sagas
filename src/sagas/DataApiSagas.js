/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { DataApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_ENTITY_SET_DATA,
  getEntitySetData
} from './DataApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * DataApi.getEntitySetData
 */

function* getEntitySetDataWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_SET_DATA, getEntitySetDataWorker);
}

function* getEntitySetDataWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Response = {};

  try {
    yield put(getEntitySetData.request(action.id, action.value));
    const { entitySetId, propertyTypeIds, entityKeyIds } = action.value;
    response.data = yield call(DataApi.getEntitySetData, entitySetId, propertyTypeIds, entityKeyIds);
    yield put(getEntitySetData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetData.failure(action.id, response.error));
  }
  finally {
    yield put(getEntitySetData.finally(action.id));
  }

  return response;
}

export {
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
};
