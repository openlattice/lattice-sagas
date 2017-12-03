/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { EntityDataModelApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  createAssociationType,
  createEntityType,
  createPropertyType,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData
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

function* getEntityDataModelWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getEntityDataModel.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getEntityDataModel);
    yield put(getEntityDataModel.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModel.failure(action.id, response.error));
  }
  finally {
    yield put(getEntityDataModel.finally(action.id));
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
    // action.value is expected to be the projection
    yield put(getEntityDataModelProjection.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getEntityDataModelProjection, action.value);
    yield put(getEntityDataModelProjection.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModelProjection.failure(action.id, response.error));
  }
  finally {
    yield put(getEntityDataModelProjection.finally(action.id));
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
    // action.value is expected to be the EntitySet id
    yield put(getEntitySet.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getEntitySet, action.value);
    yield put(getEntitySet.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySet.failure(action.id, response.error));
  }
  finally {
    yield put(getEntitySet.finally(action.id));
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
    // action.value is expected to be the EntitySet name
    yield put(getEntitySetId.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getEntitySetId, action.value);
    yield put(getEntitySetId.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetId.failure(action.id, response.error));
  }
  finally {
    yield put(getEntitySetId.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntitySetMetaData
 */

function* updateEntitySetMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ENTITY_SET_METADATA, updateEntitySetMetaDataWorker);
}

function* updateEntitySetMetaDataWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the EntitySet id and metadata
    yield put(updateEntitySetMetaData.request(action.id, action.value));
    const { id, metadata } = action.value;
    response.data = yield call(EntityDataModelApi.updateEntitySetMetaData, id, metadata);
    yield put(updateEntitySetMetaData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntitySetMetaData.failure(action.id, response.error));
  }
  finally {
    yield put(updateEntitySetMetaData.finally(action.id));
  }

  return response;
}

/*
 *
 * EntityType APIs
 *
 */

/*
 * EntityDataModelApi.createEntityType
 */

function* createEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(CREATE_ENTITY_TYPE, createEntityTypeWorker);
}

function* createEntityTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the EntityType object
    yield put(createEntityType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.createEntityType, action.value);
    yield put(createEntityType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntityType.failure(action.id, response.error));
  }
  finally {
    yield put(createEntityType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.deleteEntityType
 */

function* deleteEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_ENTITY_TYPE, deleteEntityTypeWorker);
}

function* deleteEntityTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the EntityType id
    yield put(deleteEntityType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.deleteEntityType, action.value);
    yield put(deleteEntityType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteEntityType.failure(action.id, response.error));
  }
  finally {
    yield put(deleteEntityType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllEntityTypes
 */

function* getAllEntityTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);
}

function* getAllEntityTypesWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllEntityTypes.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getAllEntityTypes);
    yield put(getAllEntityTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllEntityTypes.failure(action.id, response.error));
  }
  finally {
    yield put(getAllEntityTypes.finally(action.id));
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
    // action.value is expected to be the EntityType id
    yield put(getEntityType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getEntityType, action.value);
    yield put(getEntityType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityType.failure(action.id, response.error));
  }
  finally {
    yield put(getEntityType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function* updateEntityTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ENTITY_TYPE_METADATA, updateEntityTypeMetaDataWorker);
}

function* updateEntityTypeMetaDataWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the EntityType id and metadata
    yield put(updateEntityTypeMetaData.request(action.id, action.value));
    const { id, metadata } = action.value;
    response.data = yield call(EntityDataModelApi.updateEntityTypeMetaData, id, metadata);
    yield put(updateEntityTypeMetaData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntityTypeMetaData.failure(action.id, response.error));
  }
  finally {
    yield put(updateEntityTypeMetaData.finally(action.id));
  }

  return response;
}

/*
 *
 * PropertyType APIs
 *
 */

/*
 * EntityDataModelApi.createPropertyType
 */

function* createPropertyTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(CREATE_PROPERTY_TYPE, createPropertyTypeWorker);
}

function* createPropertyTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the PropertyType object
    yield put(createPropertyType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.createPropertyType, action.value);
    yield put(createPropertyType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createPropertyType.failure(action.id, response.error));
  }
  finally {
    yield put(createPropertyType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.deletePropertyType
 */

function* deletePropertyTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_PROPERTY_TYPE, deletePropertyTypeWorker);
}

function* deletePropertyTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the PropertyType id
    yield put(deletePropertyType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.deletePropertyType, action.value);
    yield put(deletePropertyType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deletePropertyType.failure(action.id, response.error));
  }
  finally {
    yield put(deletePropertyType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllPropertyTypes
 */

function* getAllPropertyTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);
}

function* getAllPropertyTypesWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllPropertyTypes.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getAllPropertyTypes);
    yield put(getAllPropertyTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllPropertyTypes.failure(action.id, response.error));
  }
  finally {
    yield put(getAllPropertyTypes.finally(action.id));
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
    // action.value is expected to be the PropertyType id
    yield put(getPropertyType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getPropertyType, action.value);
    yield put(getPropertyType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getPropertyType.failure(action.id, response.error));
  }
  finally {
    yield put(getPropertyType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.updatePropertyTypeMetaData
 */

function* updatePropertyTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_PROPERTY_TYPE_METADATA, updatePropertyTypeMetaDataWorker);
}

function* updatePropertyTypeMetaDataWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the PropertyType id and metadata
    yield put(updatePropertyTypeMetaData.request(action.id, action.value));
    const { id, metadata } = action.value;
    response.data = yield call(EntityDataModelApi.updatePropertyTypeMetaData, id, metadata);
    yield put(updatePropertyTypeMetaData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updatePropertyTypeMetaData.failure(action.id, response.error));
  }
  finally {
    yield put(updatePropertyTypeMetaData.finally(action.id));
  }

  return response;
}

/*
 *
 * AssociationType APIs
 *
 */

/*
 * EntityDataModelApi.createAssociationType
 */

function* createAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(CREATE_ASSOCIATION_TYPE, createAssociationTypeWorker);
}

function* createAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the AssociationType object
    yield put(createAssociationType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.createAssociationType, action.value);
    yield put(createAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(createAssociationType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.deleteAssociationType
 */

function* deleteAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_ASSOCIATION_TYPE, deleteAssociationTypeWorker);
}

function* deleteAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be the AssociationType id
    yield put(deleteAssociationType.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.deleteAssociationType, action.value);
    yield put(deleteAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(deleteAssociationType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllAssociationTypes
 */

function* getAllAssociationTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ASSOCIATION_TYPES, getAllAssociationTypesWorker);
}

function* getAllAssociationTypesWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllAssociationTypes.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getAllAssociationTypes);
    yield put(getAllAssociationTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllAssociationTypes.failure(action.id, response.error));
  }
  finally {
    yield put(getAllAssociationTypes.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function* updateAssociationTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ASSOCIATION_TYPE_METADATA, updateAssociationTypeMetaDataWorker);
}

function* updateAssociationTypeMetaDataWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the AssociationType's EntityType id and metadata
    yield put(updateAssociationTypeMetaData.request(action.id, action.value));
    const { id, metadata } = action.value;
    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    response.data = yield call(EntityDataModelApi.updateEntityTypeMetaData, id, metadata);
    yield put(updateAssociationTypeMetaData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateAssociationTypeMetaData.failure(action.id, response.error));
  }
  finally {
    yield put(updateAssociationTypeMetaData.finally(action.id));
  }

  return response;
}

/*
 *
 * exports
 *
 */

export {
  createAssociationTypeWatcher,
  createAssociationTypeWorker,
  createEntityTypeWatcher,
  createEntityTypeWorker,
  createPropertyTypeWatcher,
  createPropertyTypeWorker,
  deleteAssociationTypeWatcher,
  deleteAssociationTypeWorker,
  deleteEntityTypeWatcher,
  deleteEntityTypeWorker,
  deletePropertyTypeWatcher,
  deletePropertyTypeWorker,
  getAllAssociationTypesWatcher,
  getAllAssociationTypesWorker,
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
  getPropertyTypeWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker
};
