/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { EntityDataModelApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
} from './EntityDataModelApiActionFactory';

/*
 * types
 */

// TODO: move out to global Flow definition for the library
declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 *
 * Entity Data Model APIs
 *
 */

/*
 * EntityDataModelApi.getEntityDataModel
 */

function* getEntityDataModelWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL, getEntityDataModelWorker);
}

function* getEntityDataModelWorker() :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntityDataModel.request());
    response.data = yield call(EntityDataModelApi.getEntityDataModel);
    yield put(getEntityDataModel.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModel.failure(response));
  }
  finally {
    yield put(getEntityDataModel.finally());
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityDataModelProjection
 */

function* getEntityDataModelProjectionWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_PROJECTION, getEntityDataModelProjectionWorker);
}

function* getEntityDataModelProjectionWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntityDataModelProjection.request());
    response.data = yield call(EntityDataModelApi.getEntityDataModelProjection, action.value);
    yield put(getEntityDataModelProjection.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModelProjection.failure(response));
  }
  finally {
    yield put(getEntityDataModelProjection.finally());
  }

  return response;
}

/*
 *
 * EntitySet APIs
 *
 */

/*
 * EntityDataModelApi.getEntitySet
 */

function* getEntitySetWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET, getEntitySetWorker);
}

function* getEntitySetWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntitySet.request());
    response.data = yield call(EntityDataModelApi.getEntitySet, action.value);
    yield put(getEntitySet.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySet.failure(response));
  }
  finally {
    yield put(getEntitySet.finally());
  }

  return response;
}

/*
 * EntityDataModelApi.getEntitySetId
 */

function* getEntitySetIdWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET_ID, getEntitySetIdWorker);
}

function* getEntitySetIdWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntitySetId.request());
    response.data = yield call(EntityDataModelApi.getEntitySetId, action.value);
    yield put(getEntitySetId.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetId.failure(response));
  }
  finally {
    yield put(getEntitySetId.finally());
  }

  return response;
}

/*
 *
 * EntityType APIs
 *
 */

/*
 * EntityDataModelApi.getAllEntityTypes
 */

function* getAllEntityTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);
}

function* getAllEntityTypesWorker() :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllEntityTypes.request());
    response.data = yield call(EntityDataModelApi.getAllEntityTypes);
    yield put(getAllEntityTypes.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getAllEntityTypes.failure(response));
  }
  finally {
    yield put(getAllEntityTypes.finally());
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityType
 */

function* getEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_TYPE, getEntityTypeWorker);
}

function* getEntityTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntityType.request());
    response.data = yield call(EntityDataModelApi.getEntityType, action.value);
    yield put(getEntityType.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityType.failure(response));
  }
  finally {
    yield put(getEntityType.finally());
  }

  return response;
}

/*
 *
 * PropertyType APIs
 *
 */

/*
 * EntityDataModelApi.getAllPropertyTypes
 */

function* getAllPropertyTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);
}

function* getAllPropertyTypesWorker() :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllPropertyTypes.request());
    response.data = yield call(EntityDataModelApi.getAllPropertyTypes);
    yield put(getAllPropertyTypes.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getAllPropertyTypes.failure(response));
  }
  finally {
    yield put(getAllPropertyTypes.finally());
  }

  return response;
}

/*
 * EntityDataModelApi.getPropertyType
 */

function* getPropertyTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_PROPERTY_TYPE, getPropertyTypeWorker);
}

function* getPropertyTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getPropertyType.request());
    response.data = yield call(EntityDataModelApi.getPropertyType, action.value);
    yield put(getPropertyType.success(response));
  }
  catch (error) {
    response.error = error;
    yield put(getPropertyType.failure(response));
  }
  finally {
    yield put(getPropertyType.finally());
  }

  return response;
}

/*
 *
 * exports
 *
 */

export {
  getAllEntityTypesWatcher,
  getAllEntityTypesWorker,
  getAllPropertyTypesWatcher,
  getAllPropertyTypesWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker
};
