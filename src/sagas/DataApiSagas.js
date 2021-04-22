/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  CREATE_ASSOCIATIONS,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITY_AND_NEIGHBOR_DATA,
  DELETE_ENTITY_DATA,
  DELETE_ENTITY_SET_DATA,
  GET_BINARY_PROPERTIES,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  GET_ENTITY_SET_SIZE,
  GET_LINKED_ENTITY_SET_BREAKDOWN,
  UPDATE_ENTITY_DATA,
  createAssociations,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntityAndNeighborData,
  deleteEntityData,
  deleteEntitySetData,
  getBinaryProperties,
  getEntityData,
  getEntitySetData,
  getEntitySetSize,
  getLinkedEntitySetBreakdown,
  updateEntityData,
} from './DataApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * DataApi.createAssociations
 * DataApiActions.createAssociations
 *
 */

function* createAssociationsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ASSOCIATIONS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createAssociations.request(id, value));
    const response = yield call(DataApi.createAssociations, value);
    workerResponse = { data: response };
    yield put(createAssociations.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createAssociations.failure(id, error));
  }
  finally {
    yield put(createAssociations.finally(id));
  }

  return workerResponse;
}

function* createAssociationsWatcher() :Saga<*> {

  yield takeEvery(CREATE_ASSOCIATIONS, createAssociationsWorker);
}

/*
 *
 * DataApi.createEntityAndAssociationData
 * DataApiActions.createEntityAndAssociationData
 *
 */

function* createEntityAndAssociationDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ENTITY_AND_ASSOCIATION_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createEntityAndAssociationData.request(id, value));
    const response = yield call(DataApi.createEntityAndAssociationData, value);
    workerResponse = { data: response };
    yield put(createEntityAndAssociationData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createEntityAndAssociationData.failure(id, error));
  }
  finally {
    yield put(createEntityAndAssociationData.finally(id));
  }

  return workerResponse;
}

function* createEntityAndAssociationDataWatcher() :Saga<*> {

  yield takeEvery(CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);
}

/*
 *
 * DataApi.createOrMergeEntityData
 * DataApiActions.createOrMergeEntityData
 *
 */

function* createOrMergeEntityDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_OR_MERGE_ENTITY_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createOrMergeEntityData.request(id, value));
    const { entitySetId, entityData } = value;
    const response = yield call(DataApi.createOrMergeEntityData, entitySetId, entityData);
    workerResponse = { data: response };
    yield put(createOrMergeEntityData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createOrMergeEntityData.failure(id, error));
  }
  finally {
    yield put(createOrMergeEntityData.finally(id));
  }

  return workerResponse;
}

function* createOrMergeEntityDataWatcher() :Saga<*> {

  yield takeEvery(CREATE_OR_MERGE_ENTITY_DATA, createOrMergeEntityDataWorker);
}

/*
 *
 * DataApi.deleteEntityAndNeighborData
 * DataApiActions.deleteEntityAndNeighborData
 *
 */

function* deleteEntityAndNeighborDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ENTITY_AND_NEIGHBOR_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteEntityAndNeighborData.request(id, value));
    const { deleteType, entitySetId, filter } = value;
    const response = yield call(DataApi.deleteEntityAndNeighborData, entitySetId, filter, deleteType);
    workerResponse = { data: response };
    yield put(deleteEntityAndNeighborData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteEntityAndNeighborData.failure(id, error));
  }
  finally {
    yield put(deleteEntityAndNeighborData.finally(id));
  }

  return workerResponse;
}

function* deleteEntityAndNeighborDataWatcher() :Saga<*> {

  yield takeEvery(DELETE_ENTITY_AND_NEIGHBOR_DATA, deleteEntityAndNeighborDataWorker);
}

/*
 *
 * DataApi.deleteEntityData
 * DataApiActions.deleteEntityData
 *
 */

function* deleteEntityDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ENTITY_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteEntityData.request(id, value));
    const {
      deleteType,
      entityKeyIds,
      entitySetId,
      block,
    } = value;
    const response = yield call(DataApi.deleteEntityData, entitySetId, entityKeyIds, deleteType, block);
    workerResponse = { data: response };
    yield put(deleteEntityData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteEntityData.failure(id, error));
  }
  finally {
    yield put(deleteEntityData.finally(id));
  }

  return workerResponse;
}

function* deleteEntityDataWatcher() :Saga<*> {

  yield takeEvery(DELETE_ENTITY_DATA, deleteEntityDataWorker);
}

/*
 *
 * DataApi.deleteEntitySetData
 * DataApiActions.deleteEntitySetData
 *
 */

function* deleteEntitySetDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ENTITY_SET_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteEntitySetData.request(id, value));
    const { deleteType, entitySetId } = value;
    const response = yield call(DataApi.deleteEntitySetData, entitySetId, deleteType);
    workerResponse = { data: response };
    yield put(deleteEntitySetData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteEntitySetData.failure(id, error));
  }
  finally {
    yield put(deleteEntitySetData.finally(id));
  }

  return workerResponse;
}

function* deleteEntitySetDataWatcher() :Saga<*> {

  yield takeEvery(DELETE_ENTITY_SET_DATA, deleteEntitySetDataWorker);
}

/*
 *
 * DataApi.getEntityData
 * DataApiActions.getEntityData
 *
 */

function* getEntityDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntityData.request(id, value));
    const { entityKeyId, entitySetId } = value;
    const response = yield call(DataApi.getEntityData, entitySetId, entityKeyId);
    workerResponse = { data: response };
    yield put(getEntityData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntityData.failure(id, error));
  }
  finally {
    yield put(getEntityData.finally(id));
  }

  return workerResponse;
}

function* getEntityDataWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_DATA, getEntityDataWorker);
}

/*
 *
 * DataApi.getEntitySetData
 * DataApiActions.getEntitySetData
 *
 */

function* getEntitySetDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SET_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySetData.request(id, value));
    const { entityKeyIds, entitySetId, propertyTypeIds } = value;
    const response = yield call(DataApi.getEntitySetData, entitySetId, propertyTypeIds, entityKeyIds);
    workerResponse = { data: response };
    yield put(getEntitySetData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySetData.failure(id, error));
  }
  finally {
    yield put(getEntitySetData.finally(id));
  }

  return workerResponse;
}

function* getEntitySetDataWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SET_DATA, getEntitySetDataWorker);
}

/*
 *
 * DataApi.getEntitySetSize
 * DataApiActions.getEntitySetSize
 *
 */

function* getEntitySetSizeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SET_SIZE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySetSize.request(id, value));
    const response = yield call(DataApi.getEntitySetSize, value);
    workerResponse = { data: response };
    yield put(getEntitySetSize.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySetSize.failure(id, error));
  }
  finally {
    yield put(getEntitySetSize.finally(id));
  }

  return workerResponse;
}

function* getEntitySetSizeWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SET_SIZE, getEntitySetSizeWorker);
}

/*
 *
 * DataApi.getLinkedEntitySetBreakdown
 * DataApiActions.getLinkedEntitySetBreakdown
 *
 */

function* getLinkedEntitySetBreakdownWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_LINKED_ENTITY_SET_BREAKDOWN)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getLinkedEntitySetBreakdown.request(id, value));
    const { entityKeyIds, entitySetId, propertyTypeIds } = value;
    const response = yield call(DataApi.getLinkedEntitySetBreakdown, entitySetId, propertyTypeIds, entityKeyIds);
    workerResponse = { data: response };
    yield put(getLinkedEntitySetBreakdown.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getLinkedEntitySetBreakdown.failure(id, error));
  }
  finally {
    yield put(getLinkedEntitySetBreakdown.finally(id));
  }

  return workerResponse;
}

function* getLinkedEntitySetBreakdownWatcher() :Saga<*> {

  yield takeEvery(GET_LINKED_ENTITY_SET_BREAKDOWN, getLinkedEntitySetBreakdownWorker);
}

/*
 *
 * DataApi.getBinaryProperties
 * DataApiActions.getBinaryProperties
 *
 */

function* getBinaryPropertiesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_BINARY_PROPERTIES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getBinaryProperties.request(id, value));
    const response = yield call(DataApi.getBinaryProperties, value);
    workerResponse = { data: response };
    yield put(getBinaryProperties.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getBinaryProperties.failure(id, error));
  }
  finally {
    yield put(getBinaryProperties.finally(id));
  }

  return workerResponse;
}

function* getBinaryPropertiesWatcher() :Saga<*> {

  yield takeEvery(GET_BINARY_PROPERTIES, getBinaryPropertiesWorker);
}

/*
 *
 * DataApi.updateEntityData
 * DataApiActions.updateEntityData
 *
 */

function* updateEntityDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ENTITY_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateEntityData.request(id, value));
    const { entities, entitySetId, updateType } = value;
    const response = yield call(DataApi.updateEntityData, entitySetId, entities, updateType);
    workerResponse = { data: response };
    yield put(updateEntityData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateEntityData.failure(id, error));
  }
  finally {
    yield put(updateEntityData.finally(id));
  }

  return workerResponse;
}

function* updateEntityDataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ENTITY_DATA, updateEntityDataWorker);
}

export {
  createAssociationsWatcher,
  createAssociationsWorker,
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  createOrMergeEntityDataWatcher,
  createOrMergeEntityDataWorker,
  deleteEntityAndNeighborDataWatcher,
  deleteEntityAndNeighborDataWorker,
  deleteEntityDataWatcher,
  deleteEntityDataWorker,
  deleteEntitySetDataWatcher,
  deleteEntitySetDataWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  getEntitySetSizeWatcher,
  getEntitySetSizeWorker,
  getLinkedEntitySetBreakdownWatcher,
  getLinkedEntitySetBreakdownWorker,
  getBinaryPropertiesWatcher,
  getBinaryPropertiesWorker,
  updateEntityDataWatcher,
  updateEntityDataWorker,
};
