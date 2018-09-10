/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { DataApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  getEntityData,
  getEntitySetData
} from './DataApiActionFactory';

/*
 * DataApi.getEntityData
 */

function* getEntityDataWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_DATA, getEntityDataWorker);
}

function* getEntityDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_DATA)) {
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
  const { entitySetId, entityKeyId } = value;

  try {
    yield put(getEntityData.request(id, value));
    response.data = yield call(DataApi.getEntityData, entitySetId, entityKeyId);
    yield put(getEntityData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityData.failure(id, response.error));
  }
  finally {
    yield put(getEntityData.finally(id));
  }

  return response;
}

/*
 * DataApi.getEntitySetData
 */

function* getEntitySetDataWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_SET_DATA, getEntitySetDataWorker);
}

function* getEntitySetDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_SET_DATA)) {
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
  const { entitySetId, propertyTypeIds, entityKeyIds } = value;

  try {
    yield put(getEntitySetData.request(id, value));
    response.data = yield call(DataApi.getEntitySetData, entitySetId, propertyTypeIds, entityKeyIds);
    yield put(getEntitySetData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetData.failure(id, response.error));
  }
  finally {
    yield put(getEntitySetData.finally(id));
  }

  return response;
}

export {
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
};
