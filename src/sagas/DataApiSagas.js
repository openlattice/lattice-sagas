/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { DataApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  CLEAR_ENTITY_FROM_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  UPDATE_ENTITY_DATA,
  clearEntityFromEntitySet,
  getEntityData,
  getEntitySetData,
  updateEntityData,
} from './DataApiActions';

/*
 *
 * DataApi.clearEntityFromEntitySet
 * DataApiActions.clearEntityFromEntitySet
 *
 */

function* clearEntityFromEntitySetWatcher() :Generator<*, *, *> {

  yield takeEvery(CLEAR_ENTITY_FROM_ENTITY_SET, clearEntityFromEntitySetWorker);
}

function* clearEntityFromEntitySetWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CLEAR_ENTITY_FROM_ENTITY_SET)) {
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
    yield put(clearEntityFromEntitySet.request(id, value));
    response.data = yield call(DataApi.clearEntityFromEntitySet, entitySetId, entityKeyId);
    yield put(clearEntityFromEntitySet.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(clearEntityFromEntitySet.failure(id, response.error));
  }
  finally {
    yield put(clearEntityFromEntitySet.finally(id));
  }

  return response;
}

/*
 *
 * DataApi.getEntityData
 * DataApiActions.getEntityData
 *
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
 *
 * DataApi.getEntitySetData
 * DataApiActions.getEntitySetData
 *
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

/*
 *
 * DataApi.updateEntityData
 * DataApiActions.updateEntityData
 *
 */

function* updateEntityDataWatcher() :Generator<*, *, *> {

  yield takeEvery(UPDATE_ENTITY_DATA, updateEntityDataWorker);
}

function* updateEntityDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ENTITY_DATA)) {
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
  const { entitySetId, entities, updateType } = value;

  try {
    yield put(updateEntityData.request(id, value));
    response.data = yield call(DataApi.updateEntityData, entitySetId, entities, updateType);
    yield put(updateEntityData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntityData.failure(id, response.error));
  }
  finally {
    yield put(updateEntityData.finally(id));
  }

  return response;
}

export {
  clearEntityFromEntitySetWatcher,
  clearEntityFromEntitySetWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  updateEntityDataWatcher,
  updateEntityDataWorker,
};
