/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { EntitySetsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  CREATE_ENTITY_SETS,
  DELETE_ENTITY_SET,
  GET_ALL_ENTITY_SETS,
  GET_ENTITY_SET,
  GET_ENTITY_SETS,
  GET_ENTITY_SET_ID,
  GET_ENTITY_SET_IDS,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS,
  UPDATE_ENTITY_SET_METADATA,
  createEntitySets,
  deleteEntitySet,
  getAllEntitySets,
  getEntitySet,
  getEntitySetId,
  getEntitySetIds,
  getEntitySets,
  getPropertyTypeMetaDataForEntitySet,
  getPropertyTypeMetaDataForEntitySets,
  updateEntitySetMetadata,
} from './EntitySetsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * EntitySetsApi.createEntitySets
 * EntitySetsApiActions.createEntitySets
 *
 */

function* createEntitySetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ENTITY_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createEntitySets.request(id, value));
    const response = yield call(EntitySetsApi.createEntitySets, value);
    workerResponse = { data: response };
    yield put(createEntitySets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createEntitySets.failure(id, error));
  }
  finally {
    yield put(createEntitySets.finally(id));
  }

  return workerResponse;
}

function* createEntitySetsWatcher() :Saga<*> {

  yield takeEvery(CREATE_ENTITY_SETS, createEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.deleteEntitySet
 * EntitySetsApiActions.deleteEntitySet
 *
 */

function* deleteEntitySetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ENTITY_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteEntitySet.request(id, value));
    const response = yield call(EntitySetsApi.deleteEntitySet, value);
    workerResponse = { data: response };
    yield put(deleteEntitySet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteEntitySet.failure(id, error));
  }
  finally {
    yield put(deleteEntitySet.finally(id));
  }

  return workerResponse;
}

function* deleteEntitySetWatcher() :Saga<*> {

  yield takeEvery(DELETE_ENTITY_SET, deleteEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getAllEntitySets
 * EntitySetsApiActions.getAllEntitySets
 *
 */

function* getAllEntitySetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ENTITY_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllEntitySets.request(id));
    const response = yield call(EntitySetsApi.getAllEntitySets);
    workerResponse = { data: response };
    yield put(getAllEntitySets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllEntitySets.failure(id, error));
  }
  finally {
    yield put(getAllEntitySets.finally(id));
  }

  return workerResponse;
}

function* getAllEntitySetsWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ENTITY_SETS, getAllEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.getEntitySet
 * EntitySetsApiActions.getEntitySet
 *
 */

function* getEntitySetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySet.request(id, value));
    const response = yield call(EntitySetsApi.getEntitySet, value);
    workerResponse = { data: response };
    yield put(getEntitySet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySet.failure(id, error));
  }
  finally {
    yield put(getEntitySet.finally(id));
  }

  return workerResponse;
}

function* getEntitySetWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SET, getEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getEntitySetId
 * EntitySetsApiActions.getEntitySetId
 *
 */

function* getEntitySetIdWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SET_ID)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySetId.request(id, value));
    const response = yield call(EntitySetsApi.getEntitySetId, value);
    workerResponse = { data: response };
    yield put(getEntitySetId.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySetId.failure(id, error));
  }
  finally {
    yield put(getEntitySetId.finally(id));
  }

  return workerResponse;
}

function* getEntitySetIdWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SET_ID, getEntitySetIdWorker);
}

/*
 *
 * EntitySetsApi.getEntitySetIds
 * EntitySetsApiActions.getEntitySetIds
 *
 */

function* getEntitySetIdsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SET_IDS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySetIds.request(id, value));
    const response = yield call(EntitySetsApi.getEntitySetIds, value);
    workerResponse = { data: response };
    yield put(getEntitySetIds.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySetIds.failure(id, error));
  }
  finally {
    yield put(getEntitySetIds.finally(id));
  }

  return workerResponse;
}

function* getEntitySetIdsWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SET_IDS, getEntitySetIdsWorker);
}

/*
 *
 * EntitySetsApi.getEntitySets
 * EntitySetsApiActions.getEntitySets
 *
 */

function* getEntitySetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntitySets.request(id, value));
    const response = yield call(EntitySetsApi.getEntitySets, value);
    workerResponse = { data: response };
    yield put(getEntitySets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntitySets.failure(id, error));
  }
  finally {
    yield put(getEntitySets.finally(id));
  }

  return workerResponse;
}

function* getEntitySetsWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_SETS, getEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.getPropertyTypeMetaDataForEntitySet
 * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySet
 *
 */

function* getPropertyTypeMetaDataForEntitySetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getPropertyTypeMetaDataForEntitySet.request(id, value));
    const { entitySetId, propertyTypeId } = value;
    const response = yield call(EntitySetsApi.getPropertyTypeMetaDataForEntitySet, entitySetId, propertyTypeId);
    workerResponse = { data: response };
    yield put(getPropertyTypeMetaDataForEntitySet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getPropertyTypeMetaDataForEntitySet.failure(id, error));
  }
  finally {
    yield put(getPropertyTypeMetaDataForEntitySet.finally(id));
  }

  return workerResponse;
}

function* getPropertyTypeMetaDataForEntitySetWatcher() :Saga<*> {

  yield takeEvery(GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET, getPropertyTypeMetaDataForEntitySetWorker);
}

/*
 *
 * EntitySetsApi.getPropertyTypeMetaDataForEntitySets
 * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySets
 *
 */

function* getPropertyTypeMetaDataForEntitySetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getPropertyTypeMetaDataForEntitySets.request(id, value));
    const response = yield call(EntitySetsApi.getPropertyTypeMetaDataForEntitySets, value);
    workerResponse = { data: response };
    yield put(getPropertyTypeMetaDataForEntitySets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getPropertyTypeMetaDataForEntitySets.failure(id, error));
  }
  finally {
    yield put(getPropertyTypeMetaDataForEntitySets.finally(id));
  }

  return workerResponse;
}

function* getPropertyTypeMetaDataForEntitySetsWatcher() :Saga<*> {

  yield takeEvery(GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS, getPropertyTypeMetaDataForEntitySetsWorker);
}

/*
 *
 * EntitySetsApi.updateEntitySetMetadata
 * EntitySetsApiActions.updateEntitySetMetadata
 *
 */

function* updateEntitySetMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ENTITY_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateEntitySetMetadata.request(id, value));
    const { entitySetId, update } = value;
    const response = yield call(EntitySetsApi.updateEntitySetMetadata, entitySetId, update);
    workerResponse = { data: response };
    yield put(updateEntitySetMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateEntitySetMetadata.failure(id, error));
  }
  finally {
    yield put(updateEntitySetMetadata.finally(id));
  }

  return workerResponse;
}

function* updateEntitySetMetadataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ENTITY_SET_METADATA, updateEntitySetMetadataWorker);
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
  getEntitySetsWatcher,
  getEntitySetsWorker,
  getPropertyTypeMetaDataForEntitySetWatcher,
  getPropertyTypeMetaDataForEntitySetWorker,
  getPropertyTypeMetaDataForEntitySetsWatcher,
  getPropertyTypeMetaDataForEntitySetsWorker,
  updateEntitySetMetadataWorker,
  updateEntitySetMetadataWatcher,
};
