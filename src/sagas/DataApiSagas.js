/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataApi } from 'lattice';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITIES_AND_NEIGHBORS,
  DELETE_ENTITY,
  DELETE_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  UPDATE_ENTITY_DATA,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntitiesAndNeighbors,
  deleteEntity,
  deleteEntitySet,
  getEntityData,
  getEntitySetData,
  updateEntityData,
} from './DataApiActions';

/*
 *
 * DataApi.createEntityAndAssociationData
 * DataApiActions.createEntityAndAssociationData
 *
 */

function* createEntityAndAssociationDataWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);
}

function* createEntityAndAssociationDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_ENTITY_AND_ASSOCIATION_DATA)) {
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
    yield put(createEntityAndAssociationData.request(id, value));
    response.data = yield call(DataApi.createEntityAndAssociationData, value);
    yield put(createEntityAndAssociationData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntityAndAssociationData.failure(id, response.error));
  }
  finally {
    yield put(createEntityAndAssociationData.finally(id));
  }

  return response;
}

/*
 *
 * DataApi.createOrMergeEntityData
 * DataApiActions.createOrMergeEntityData
 *
 */

function* createOrMergeEntityDataWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_OR_MERGE_ENTITY_DATA, createOrMergeEntityDataWorker);
}

function* createOrMergeEntityDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_OR_MERGE_ENTITY_DATA)) {
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
  const { entitySetId, entityData } = value;

  try {
    yield put(createOrMergeEntityData.request(id, value));
    response.data = yield call(DataApi.createOrMergeEntityData, entitySetId, entityData);
    yield put(createOrMergeEntityData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createOrMergeEntityData.failure(id, response.error));
  }
  finally {
    yield put(createOrMergeEntityData.finally(id));
  }

  return response;
}

/*
 *
 * DataApi.deleteEntitiesAndNeighbors
 * DataApiActions.deleteEntitiesAndNeighbors
 *
 */

function* deleteEntitiesAndNeighborsWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ENTITIES_AND_NEIGHBORS, deleteEntitiesAndNeighborsWorker);
}

function* deleteEntitiesAndNeighborsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_ENTITIES_AND_NEIGHBORS)) {
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
  const { entitySetId, filter, deleteType } = value;

  try {
    yield put(deleteEntitiesAndNeighbors.request(id, value));
    response.data = yield call(DataApi.deleteEntitiesAndNeighbors, entitySetId, filter, deleteType);
    yield put(deleteEntitiesAndNeighbors.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteEntitiesAndNeighbors.failure(id, response.error));
  }
  finally {
    yield put(deleteEntitiesAndNeighbors.finally(id));
  }

  return response;
}

/*
 *
 * DataApi.deleteEntity
 * DataApiActions.deleteEntity
 *
 */

function* deleteEntityWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ENTITY, deleteEntityWorker);
}

function* deleteEntityWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_ENTITY)) {
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
  const { deleteType, entityKeyId, entitySetId } = value;

  try {
    yield put(deleteEntity.request(id, value));
    response.data = yield call(DataApi.deleteEntity, entitySetId, entityKeyId, deleteType);
    yield put(deleteEntity.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteEntity.failure(id, response.error));
  }
  finally {
    yield put(deleteEntity.finally(id));
  }

  return response;
}

/*
 *
 * DataApi.deleteEntitySet
 * DataApiActions.deleteEntitySet
 *
 */

function* deleteEntitySetWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ENTITY_SET, deleteEntitySetWorker);
}

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
  const { deleteType, entitySetId } = value;

  try {
    yield put(deleteEntitySet.request(id, value));
    response.data = yield call(DataApi.deleteEntitySet, entitySetId, deleteType);
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
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  createOrMergeEntityDataWatcher,
  createOrMergeEntityDataWorker,
  deleteEntitiesAndNeighborsWatcher,
  deleteEntitiesAndNeighborsWorker,
  deleteEntityWatcher,
  deleteEntityWorker,
  deleteEntitySetWatcher,
  deleteEntitySetWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  updateEntityDataWatcher,
  updateEntityDataWorker,
};
