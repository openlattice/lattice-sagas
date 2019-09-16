/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { EntitySetsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  CREATE_ENTITY_SETS,
  DELETE_ENTITY_SET,
  GET_ALL_ENTITY_SETS,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_SET_IDS,
  GET_PT_METADATA_FOR_ENTITY_SET,
  GET_PT_METADATA_FOR_ENTITY_SETS,
  createEntitySets,
  deleteEntitySet,
  getAllEntitySets,
  getEntitySet,
  getEntitySetId,
  getEntitySetIds,
  getPropertyTypeMetaDataForEntitySet,
  getPropertyTypeMetaDataForEntitySets,
} from './EntitySetsApiActions';

/*
 *
 * EntitySetsApi.createEntitySets
 * EntitySetsApiActions.createEntitySets
 *
 */

function* createEntitySetsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_ENTITY_SETS)) {
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
    yield put(createEntitySets.request(id, value));
    response.data = yield call(EntitySetsApi.createEntitySets, value);
    yield put(createEntitySets.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntitySets.failure(id, response.error));
  }
  finally {
    yield put(createEntitySets.finally(id));
  }

  return response;
}

function* createEntitySetsWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ENTITY_SETS, createEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.deleteEntitySet
 * EntitySetsApiActions.deleteEntitySet
 *
 */

function* deleteEntitySetWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_ENTITY_SET)) {
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
    yield put(deleteEntitySet.request(id, value));
    response.data = yield call(EntitySetsApi.deleteEntitySet, value);
    yield put(deleteEntitySet.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteEntitySet.failure(id, response.error));
  }
  finally {
    yield put(deleteEntitySet.finally(id));
  }

  return response;
}

function* deleteEntitySetWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ENTITY_SET, deleteEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getAllEntitySets
 * EntitySetsApiActions.getAllEntitySets
 *
 */

function* getAllEntitySetsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ENTITY_SETS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id } = seqAction;
  const response :Object = {};

  try {
    yield put(getAllEntitySets.request(id));
    response.data = yield call(EntitySetsApi.getAllEntitySets);
    yield put(getAllEntitySets.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllEntitySets.failure(id, response.error));
  }
  finally {
    yield put(getAllEntitySets.finally(id));
  }

  return response;
}

function* getAllEntitySetsWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ENTITY_SETS, getAllEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.getEntitySet
 * EntitySetsApiActions.getEntitySet
 *
 */

function* getEntitySetWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_SET)) {
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
    yield put(getEntitySet.request(id, value));
    response.data = yield call(EntitySetsApi.getEntitySet, value);
    yield put(getEntitySet.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySet.failure(id, response.error));
  }
  finally {
    yield put(getEntitySet.finally(id));
  }

  return response;
}

function* getEntitySetWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET, getEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getEntitySetId
 * EntitySetsApiActions.getEntitySetId
 *
 */

function* getEntitySetIdWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_SET_ID)) {
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
    yield put(getEntitySetId.request(id, value));
    response.data = yield call(EntitySetsApi.getEntitySetId, value);
    yield put(getEntitySetId.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetId.failure(id, response.error));
  }
  finally {
    yield put(getEntitySetId.finally(id));
  }

  return response;
}

function* getEntitySetIdWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET_ID, getEntitySetIdWorker);
}

/*
 *
 * EntitySetsApi.getEntitySetIds
 * EntitySetsApiActions.getEntitySetIds
 *
 */

function* getEntitySetIdsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_SET_IDS)) {
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
    yield put(getEntitySetIds.request(id, value));
    response.data = yield call(EntitySetsApi.getEntitySetIds, value);
    yield put(getEntitySetIds.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetIds.failure(id, response.error));
  }
  finally {
    yield put(getEntitySetIds.finally(id));
  }

  return response;
}

function* getEntitySetIdsWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET_IDS, getEntitySetIdsWorker);
}

/*
 *
 * EntitySetsApi.getPropertyTypeMetaDataForEntitySet
 * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySet
 *
 */

function* getPropertyTypeMetaDataForEntitySetWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_PT_METADATA_FOR_ENTITY_SET)) {
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
  const { entitySetId, propertyTypeId } = value;

  try {
    yield put(getPropertyTypeMetaDataForEntitySet.request(id, value));
    response.data = yield call(EntitySetsApi.getPropertyTypeMetaDataForEntitySet, entitySetId, propertyTypeId);
    yield put(getPropertyTypeMetaDataForEntitySet.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getPropertyTypeMetaDataForEntitySet.failure(id, response.error));
  }
  finally {
    yield put(getPropertyTypeMetaDataForEntitySet.finally(id));
  }

  return response;
}

function* getPropertyTypeMetaDataForEntitySetWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_PT_METADATA_FOR_ENTITY_SET, getPropertyTypeMetaDataForEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getPropertyTypeMetaDataForEntitySets
 * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySets
 *
 */

function* getPropertyTypeMetaDataForEntitySetsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_PT_METADATA_FOR_ENTITY_SETS)) {
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
    yield put(getPropertyTypeMetaDataForEntitySets.request(id, value));
    response.data = yield call(EntitySetsApi.getPropertyTypeMetaDataForEntitySets, value);
    yield put(getPropertyTypeMetaDataForEntitySets.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getPropertyTypeMetaDataForEntitySets.failure(id, response.error));
  }
  finally {
    yield put(getPropertyTypeMetaDataForEntitySets.finally(id));
  }

  return response;
}

function* getPropertyTypeMetaDataForEntitySetsWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_PT_METADATA_FOR_ENTITY_SETS, getPropertyTypeMetaDataForEntitySetsWorker);
}

export {
  createEntitySetsWatcher,
  createEntitySetsWorker,
  deleteEntitySetWatcher,
  deleteEntitySetWorker,
  getAllEntitySetsWatcher,
  getAllEntitySetsWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntitySetIdsWatcher,
  getEntitySetIdsWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getPropertyTypeMetaDataForEntitySetWatcher,
  getPropertyTypeMetaDataForEntitySetWorker,
  getPropertyTypeMetaDataForEntitySetsWatcher,
  getPropertyTypeMetaDataForEntitySetsWorker,
};
