/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { EntityDataModelApi } from 'lattice';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  ADD_DST_ET_TO_AT,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SRC_ET_TO_AT,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_DIFF,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_DATA_MODEL_VERSION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  REMOVE_DST_ET_FROM_AT,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SRC_ET_FROM_AT,
  REORDER_ENTITY_TYPE_PROPERTY_TYPES,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_DATA_MODEL,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDstEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSrcEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  createSchema,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getEntityDataModel,
  getEntityDataModelDiff,
  getEntityDataModelProjection,
  getEntityDataModelVersion,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  removeDstEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSrcEntityTypeFromAssociationType,
  reorderEntityTypePropertyTypes,
  updateAssociationTypeMetaData,
  updateEntityDataModel,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
} from './EntityDataModelApiActions';

/*
 * types
 */

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

function* getEntityDataModelWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_DATA_MODEL)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getEntityDataModel.request(id));
    response.data = yield call(EntityDataModelApi.getEntityDataModel);
    yield put(getEntityDataModel.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModel.failure(id, response.error));
  }
  finally {
    yield put(getEntityDataModel.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityDataModelDiff
 */

function* getEntityDataModelDiffWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_DIFF, getEntityDataModelDiffWorker);
}

function* getEntityDataModelDiffWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_DATA_MODEL_DIFF)) {
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
    yield put(getEntityDataModelDiff.request(id, value));
    response.data = yield call(EntityDataModelApi.getEntityDataModelDiff, value);
    yield put(getEntityDataModelDiff.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModelDiff.failure(id, response.error));
  }
  finally {
    yield put(getEntityDataModelDiff.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityDataModelProjection
 */

function* getEntityDataModelProjectionWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_PROJECTION, getEntityDataModelProjectionWorker);
}

function* getEntityDataModelProjectionWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_DATA_MODEL_PROJECTION)) {
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
    yield put(getEntityDataModelProjection.request(id, value));
    response.data = yield call(EntityDataModelApi.getEntityDataModelProjection, value);
    yield put(getEntityDataModelProjection.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModelProjection.failure(id, response.error));
  }
  finally {
    yield put(getEntityDataModelProjection.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityDataModelVersion
 */

function* getEntityDataModelVersionWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_VERSION, getEntityDataModelVersionWorker);
}

function* getEntityDataModelVersionWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_DATA_MODEL_VERSION)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getEntityDataModelVersion.request(id));
    response.data = yield call(EntityDataModelApi.getEntityDataModelVersion);
    yield put(getEntityDataModelVersion.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityDataModelVersion.failure(id, response.error));
  }
  finally {
    yield put(getEntityDataModelVersion.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntityDataModel
 */

function* updateEntityDataModelWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ENTITY_DATA_MODEL, updateEntityDataModelWorker);
}

function* updateEntityDataModelWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ENTITY_DATA_MODEL)) {
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
    yield put(updateEntityDataModel.request(id, value));
    response.data = yield call(EntityDataModelApi.updateEntityDataModel, value);
    yield put(updateEntityDataModel.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntityDataModel.failure(id, response.error));
  }
  finally {
    yield put(updateEntityDataModel.finally(id));
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
    // value is expected to be the EntitySet id
    yield put(getEntitySet.request(id, value));
    response.data = yield call(EntityDataModelApi.getEntitySet, value);
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

/*
 * EntityDataModelApi.getEntitySetId
 */

function* getEntitySetIdWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_SET_ID, getEntitySetIdWorker);
}

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
    // value is expected to be the EntitySet name
    yield put(getEntitySetId.request(id, value));
    response.data = yield call(EntityDataModelApi.getEntitySetId, value);
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

/*
 * EntityDataModelApi.updateEntitySetMetaData
 */

function* updateEntitySetMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ENTITY_SET_METADATA, updateEntitySetMetaDataWorker);
}

function* updateEntitySetMetaDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ENTITY_SET_METADATA)) {
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
  const { entitySetId, metadata } = value;

  try {
    // value is expected to be an object containing the EntitySet id and metadata
    yield put(updateEntitySetMetaData.request(id, value));
    response.data = yield call(EntityDataModelApi.updateEntitySetMetaData, entitySetId, metadata);
    yield put(updateEntitySetMetaData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntitySetMetaData.failure(id, response.error));
  }
  finally {
    yield put(updateEntitySetMetaData.finally(id));
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

function* createEntityTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_ENTITY_TYPE)) {
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
    // value is expected to be the EntityType object
    yield put(createEntityType.request(id, value));
    response.data = yield call(EntityDataModelApi.createEntityType, value);
    yield put(createEntityType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntityType.failure(id, response.error));
  }
  finally {
    yield put(createEntityType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.deleteEntityType
 */

function* deleteEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_ENTITY_TYPE, deleteEntityTypeWorker);
}

function* deleteEntityTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_ENTITY_TYPE)) {
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
    // value is expected to be the EntityType id
    yield put(deleteEntityType.request(id, value));
    response.data = yield call(EntityDataModelApi.deleteEntityType, value);
    yield put(deleteEntityType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteEntityType.failure(id, response.error));
  }
  finally {
    yield put(deleteEntityType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllEntityTypes
 */

function* getAllEntityTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);
}

function* getAllEntityTypesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ENTITY_TYPES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllEntityTypes.request(id));
    response.data = yield call(EntityDataModelApi.getAllEntityTypes);
    yield put(getAllEntityTypes.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllEntityTypes.failure(id, response.error));
  }
  finally {
    yield put(getAllEntityTypes.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getEntityType
 */

function* getEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ENTITY_TYPE, getEntityTypeWorker);
}

function* getEntityTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ENTITY_TYPE)) {
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
    // value is expected to be the EntityType id
    yield put(getEntityType.request(id, value));
    response.data = yield call(EntityDataModelApi.getEntityType, value);
    yield put(getEntityType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityType.failure(id, response.error));
  }
  finally {
    yield put(getEntityType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function* updateEntityTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ENTITY_TYPE_METADATA, updateEntityTypeMetaDataWorker);
}

function* updateEntityTypeMetaDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ENTITY_TYPE_METADATA)) {
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
  const { entityTypeId, metadata } = value;

  try {
    // value is expected to be an object containing the EntityType id and metadata
    yield put(updateEntityTypeMetaData.request(id, value));
    response.data = yield call(EntityDataModelApi.updateEntityTypeMetaData, entityTypeId, metadata);
    yield put(updateEntityTypeMetaData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateEntityTypeMetaData.failure(id, response.error));
  }
  finally {
    yield put(updateEntityTypeMetaData.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.addPropertyTypeToEntityType
 */

function* addPropertyTypeToEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE, addPropertyTypeToEntityTypeWorker);
}

function* addPropertyTypeToEntityTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, ADD_PROPERTY_TYPE_TO_ENTITY_TYPE)) {
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
  const { entityTypeId, propertyTypeId } = value;

  try {
    // value is expected to be an object containing the EntityType id and the PropertyType id
    yield put(addPropertyTypeToEntityType.request(id, value));
    response.data = yield call(EntityDataModelApi.addPropertyTypeToEntityType, entityTypeId, propertyTypeId);
    yield put(addPropertyTypeToEntityType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addPropertyTypeToEntityType.failure(id, response.error));
  }
  finally {
    yield put(addPropertyTypeToEntityType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.removePropertyTypeFromEntityType
 */

function* removePropertyTypeFromEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE, removePropertyTypeFromEntityTypeWorker);
}

function* removePropertyTypeFromEntityTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE)) {
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
  const { entityTypeId, propertyTypeId } = value;

  try {
    // value is expected to be an object containing the EntityType id and the PropertyType id
    yield put(removePropertyTypeFromEntityType.request(id, value));
    response.data = yield call(EntityDataModelApi.removePropertyTypeFromEntityType, entityTypeId, propertyTypeId);
    yield put(removePropertyTypeFromEntityType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removePropertyTypeFromEntityType.failure(id, response.error));
  }
  finally {
    yield put(removePropertyTypeFromEntityType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.reorderPropertyTypesInEntityType
 */

function* reorderEntityTypePropertyTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(REORDER_ENTITY_TYPE_PROPERTY_TYPES, reorderEntityTypePropertyTypesWorker);
}

function* reorderEntityTypePropertyTypesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REORDER_ENTITY_TYPE_PROPERTY_TYPES)) {
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
  const { entityTypeId, propertyTypeIds } = value;

  try {
    // value is expected to be an object containing the EntityType id and the PropertyType ids
    yield put(reorderEntityTypePropertyTypes.request(id, value));
    response.data = yield call(EntityDataModelApi.reorderPropertyTypesInEntityType, entityTypeId, propertyTypeIds);
    yield put(reorderEntityTypePropertyTypes.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(reorderEntityTypePropertyTypes.failure(id, response.error));
  }
  finally {
    yield put(reorderEntityTypePropertyTypes.finally(id));
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

function* createPropertyTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_PROPERTY_TYPE)) {
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
    // value is expected to be the PropertyType object
    yield put(createPropertyType.request(id, value));
    response.data = yield call(EntityDataModelApi.createPropertyType, value);
    yield put(createPropertyType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createPropertyType.failure(id, response.error));
  }
  finally {
    yield put(createPropertyType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.deletePropertyType
 */

function* deletePropertyTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_PROPERTY_TYPE, deletePropertyTypeWorker);
}

function* deletePropertyTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_PROPERTY_TYPE)) {
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
    // value is expected to be the PropertyType id
    yield put(deletePropertyType.request(id, value));
    response.data = yield call(EntityDataModelApi.deletePropertyType, value);
    yield put(deletePropertyType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deletePropertyType.failure(id, response.error));
  }
  finally {
    yield put(deletePropertyType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllPropertyTypes
 */

function* getAllPropertyTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);
}

function* getAllPropertyTypesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_PROPERTY_TYPES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllPropertyTypes.request(id));
    response.data = yield call(EntityDataModelApi.getAllPropertyTypes);
    yield put(getAllPropertyTypes.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllPropertyTypes.failure(id, response.error));
  }
  finally {
    yield put(getAllPropertyTypes.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getPropertyType
 */

function* getPropertyTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_PROPERTY_TYPE, getPropertyTypeWorker);
}

function* getPropertyTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_PROPERTY_TYPE)) {
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
    // value is expected to be the PropertyType id
    yield put(getPropertyType.request(id, value));
    response.data = yield call(EntityDataModelApi.getPropertyType, value);
    yield put(getPropertyType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getPropertyType.failure(id, response.error));
  }
  finally {
    yield put(getPropertyType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.updatePropertyTypeMetaData
 */

function* updatePropertyTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_PROPERTY_TYPE_METADATA, updatePropertyTypeMetaDataWorker);
}

function* updatePropertyTypeMetaDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_PROPERTY_TYPE_METADATA)) {
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
  const { propertyTypeId, metadata } = value;

  try {
    // value is expected to be an object containing the PropertyType id and metadata
    yield put(updatePropertyTypeMetaData.request(id, value));
    response.data = yield call(EntityDataModelApi.updatePropertyTypeMetaData, propertyTypeId, metadata);
    yield put(updatePropertyTypeMetaData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updatePropertyTypeMetaData.failure(id, response.error));
  }
  finally {
    yield put(updatePropertyTypeMetaData.finally(id));
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

function* createAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_ASSOCIATION_TYPE)) {
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
    // value is expected to be the AssociationType object
    yield put(createAssociationType.request(id, value));
    response.data = yield call(EntityDataModelApi.createAssociationType, value);
    yield put(createAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createAssociationType.failure(id, response.error));
  }
  finally {
    yield put(createAssociationType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.deleteAssociationType
 */

function* deleteAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(DELETE_ASSOCIATION_TYPE, deleteAssociationTypeWorker);
}

function* deleteAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, DELETE_ASSOCIATION_TYPE)) {
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
    // value is expected to be the AssociationType id
    yield put(deleteAssociationType.request(id, value));
    response.data = yield call(EntityDataModelApi.deleteAssociationType, value);
    yield put(deleteAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteAssociationType.failure(id, response.error));
  }
  finally {
    yield put(deleteAssociationType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllAssociationTypes
 */

function* getAllAssociationTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ASSOCIATION_TYPES, getAllAssociationTypesWorker);
}

function* getAllAssociationTypesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ASSOCIATION_TYPES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllAssociationTypes.request(id));
    response.data = yield call(EntityDataModelApi.getAllAssociationTypes);
    yield put(getAllAssociationTypes.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllAssociationTypes.failure(id, response.error));
  }
  finally {
    yield put(getAllAssociationTypes.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function* updateAssociationTypeMetaDataWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ASSOCIATION_TYPE_METADATA, updateAssociationTypeMetaDataWorker);
}

function* updateAssociationTypeMetaDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ASSOCIATION_TYPE_METADATA)) {
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
  const { associationTypeId, metadata } = value;

  try {
    // value is expected to be an object containing the AssociationType's EntityType id and metadata
    yield put(updateAssociationTypeMetaData.request(id, value));
    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    response.data = yield call(EntityDataModelApi.updateEntityTypeMetaData, associationTypeId, metadata);
    yield put(updateAssociationTypeMetaData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateAssociationTypeMetaData.failure(id, response.error));
  }
  finally {
    yield put(updateAssociationTypeMetaData.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.addDstEntityTypeToAssociationType
 */

function* addDstEntityTypeToAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_DST_ET_TO_AT, addDstEntityTypeToAssociationTypeWorker);
}

function* addDstEntityTypeToAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, ADD_DST_ET_TO_AT)) {
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
  const { associationTypeId, entityTypeId } = value;

  try {
    // value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being added
    yield put(addDstEntityTypeToAssociationType.request(id, value));
    response.data = yield call(EntityDataModelApi.addDstEntityTypeToAssociationType, associationTypeId, entityTypeId);
    yield put(addDstEntityTypeToAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addDstEntityTypeToAssociationType.failure(id, response.error));
  }
  finally {
    yield put(addDstEntityTypeToAssociationType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.addSrcEntityTypeToAssociationType
 */

function* addSrcEntityTypeToAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_SRC_ET_TO_AT, addSrcEntityTypeToAssociationTypeWorker);
}

function* addSrcEntityTypeToAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, ADD_SRC_ET_TO_AT)) {
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
  const { associationTypeId, entityTypeId } = value;

  try {
    // value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being added
    yield put(addSrcEntityTypeToAssociationType.request(id, value));
    response.data = yield call(EntityDataModelApi.addSrcEntityTypeToAssociationType, associationTypeId, entityTypeId);
    yield put(addSrcEntityTypeToAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addSrcEntityTypeToAssociationType.failure(id, response.error));
  }
  finally {
    yield put(addSrcEntityTypeToAssociationType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.removeDstEntityTypeFromAssociationType
 */

function* removeDstEntityTypeFromAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(REMOVE_DST_ET_FROM_AT, removeDstEntityTypeFromAssociationTypeWorker);
}

function* removeDstEntityTypeFromAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REMOVE_DST_ET_FROM_AT)) {
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
  const { associationTypeId, entityTypeId } = value;

  try {
    // value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being removed
    yield put(removeDstEntityTypeFromAssociationType.request(id, value));
    response.data = yield call(
      EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(removeDstEntityTypeFromAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeDstEntityTypeFromAssociationType.failure(id, response.error));
  }
  finally {
    yield put(removeDstEntityTypeFromAssociationType.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.removeSrcEntityTypeFromAssociationType
 */

function* removeSrcEntityTypeFromAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(REMOVE_SRC_ET_FROM_AT, removeSrcEntityTypeFromAssociationTypeWorker);
}

function* removeSrcEntityTypeFromAssociationTypeWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REMOVE_SRC_ET_FROM_AT)) {
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
  const { associationTypeId, entityTypeId } = value;

  try {
    // value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being removed
    yield put(removeSrcEntityTypeFromAssociationType.request(id, value));
    response.data = yield call(
      EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(removeSrcEntityTypeFromAssociationType.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeSrcEntityTypeFromAssociationType.failure(id, response.error));
  }
  finally {
    yield put(removeSrcEntityTypeFromAssociationType.finally(id));
  }

  return response;
}

/*
 *
 * Schema APIs
 *
 */

/*
 * EntityDataModelApi.createSchema
 */

function* createSchemaWatcher() :Generator<*, void, *> {

  yield takeEvery(CREATE_SCHEMA, createSchemaWorker);
}

function* createSchemaWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_SCHEMA)) {
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
    yield put(createSchema.request(id, value));
    response.data = yield call(EntityDataModelApi.createSchema, value);
    yield put(createSchema.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createSchema.failure(id, response.error));
  }
  finally {
    yield put(createSchema.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllSchemas
 */

function* getAllSchemasWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_SCHEMAS, getAllSchemasWorker);
}

function* getAllSchemasWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_SCHEMAS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllSchemas.request(id));
    response.data = yield call(EntityDataModelApi.getAllSchemas);
    yield put(getAllSchemas.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllSchemas.failure(id, response.error));
  }
  finally {
    yield put(getAllSchemas.finally(id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateSchema
 */

function* updateSchemaWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_SCHEMA, updateSchemaWorker);
}

function* updateSchemaWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_SCHEMA)) {
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
  const {
    action,
    entityTypeIds,
    propertyTypeIds,
    schemaFQN,
  } = value;

  try {
    yield put(updateSchema.request(id, value));
    response.data = yield call(
      EntityDataModelApi.updateSchema,
      schemaFQN,
      action,
      entityTypeIds,
      propertyTypeIds
    );
    yield put(updateSchema.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateSchema.failure(id, response.error));
  }
  finally {
    yield put(updateSchema.finally(id));
  }

  return response;
}

/*
 *
 * exports
 *
 */

export {
  addDstEntityTypeToAssociationTypeWatcher,
  addDstEntityTypeToAssociationTypeWorker,
  addPropertyTypeToEntityTypeWatcher,
  addPropertyTypeToEntityTypeWorker,
  addSrcEntityTypeToAssociationTypeWatcher,
  addSrcEntityTypeToAssociationTypeWorker,
  createAssociationTypeWatcher,
  createAssociationTypeWorker,
  createEntityTypeWatcher,
  createEntityTypeWorker,
  createPropertyTypeWatcher,
  createPropertyTypeWorker,
  createSchemaWatcher,
  createSchemaWorker,
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
  getAllSchemasWatcher,
  getAllSchemasWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityDataModelDiffWatcher,
  getEntityDataModelDiffWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntityDataModelVersionWatcher,
  getEntityDataModelVersionWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker,
  removeDstEntityTypeFromAssociationTypeWatcher,
  removeDstEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSrcEntityTypeFromAssociationTypeWatcher,
  removeSrcEntityTypeFromAssociationTypeWorker,
  reorderEntityTypePropertyTypesWatcher,
  reorderEntityTypePropertyTypesWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntityDataModelWatcher,
  updateEntityDataModelWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker,
  updateSchemaWatcher,
  updateSchemaWorker,
};
