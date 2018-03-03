/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { EntityDataModelApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

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
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  REORDER_ENTITY_TYPE_PROPERTY_TYPES,
  RM_DST_ET_FROM_AT,
  RM_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  RM_SRC_ET_FROM_AT,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDestinationEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSourceEntityTypeToAssociationType,
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
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  reorderEntityTypePropertyTypes,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema
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
 * EntityDataModelApi.addPropertyTypeToEntityType
 */

function* addPropertyTypeToEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE, addPropertyTypeToEntityTypeWorker);
}

function* addPropertyTypeToEntityTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the EntityType id and the PropertyType id
    yield put(addPropertyTypeToEntityType.request(action.id, action.value));
    const { entityTypeId, propertyTypeId } = action.value;
    response.data = yield call(EntityDataModelApi.addPropertyTypeToEntityType, entityTypeId, propertyTypeId);
    yield put(addPropertyTypeToEntityType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addPropertyTypeToEntityType.failure(action.id, response.error));
  }
  finally {
    yield put(addPropertyTypeToEntityType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.removePropertyTypeFromEntityType
 */

function* removePropertyTypeFromEntityTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(RM_PROPERTY_TYPE_FROM_ENTITY_TYPE, removePropertyTypeFromEntityTypeWorker);
}

function* removePropertyTypeFromEntityTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the EntityType id and the PropertyType id
    yield put(removePropertyTypeFromEntityType.request(action.id, action.value));
    const { entityTypeId, propertyTypeId } = action.value;
    response.data = yield call(EntityDataModelApi.removePropertyTypeFromEntityType, entityTypeId, propertyTypeId);
    yield put(removePropertyTypeFromEntityType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removePropertyTypeFromEntityType.failure(action.id, response.error));
  }
  finally {
    yield put(removePropertyTypeFromEntityType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.reorderPropertyTypesInEntityType
 */

function* reorderEntityTypePropertyTypesWatcher() :Generator<*, void, *> {

  yield takeEvery(REORDER_ENTITY_TYPE_PROPERTY_TYPES, reorderEntityTypePropertyTypesWorker);
}

function* reorderEntityTypePropertyTypesWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the EntityType id and the PropertyType ids
    yield put(reorderEntityTypePropertyTypes.request(action.id, action.value));
    const { entityTypeId, propertyTypeIds } = action.value;
    response.data = yield call(EntityDataModelApi.reorderPropertyTypesInEntityType, entityTypeId, propertyTypeIds);
    yield put(reorderEntityTypePropertyTypes.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(reorderEntityTypePropertyTypes.failure(action.id, response.error));
  }
  finally {
    yield put(reorderEntityTypePropertyTypes.finally(action.id));
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
 * EntityDataModelApi.addDstEntityTypeToAssociationType
 */

function* addDestinationEntityTypeToAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_DST_ET_TO_AT, addDestinationEntityTypeToAssociationTypeWorker);
}

function* addDestinationEntityTypeToAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being added
    yield put(addDestinationEntityTypeToAssociationType.request(action.id, action.value));
    const { associationTypeId, entityTypeId } = action.value;
    response.data = yield call(
      EntityDataModelApi.addDstEntityTypeToAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(addDestinationEntityTypeToAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addDestinationEntityTypeToAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(addDestinationEntityTypeToAssociationType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.addSrcEntityTypeToAssociationType
 */

function* addSourceEntityTypeToAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(ADD_SRC_ET_TO_AT, addSourceEntityTypeToAssociationTypeWorker);
}

function* addSourceEntityTypeToAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being added
    yield put(addSourceEntityTypeToAssociationType.request(action.id, action.value));
    const { associationTypeId, entityTypeId } = action.value;
    response.data = yield call(
      EntityDataModelApi.addSrcEntityTypeToAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(addSourceEntityTypeToAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addSourceEntityTypeToAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(addSourceEntityTypeToAssociationType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.removeDstEntityTypeFromAssociationType
 */

function* removeDestinationEntityTypeFromAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(RM_DST_ET_FROM_AT, removeDestinationEntityTypeFromAssociationTypeWorker);
}

function* removeDestinationEntityTypeFromAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being removed
    yield put(removeDestinationEntityTypeFromAssociationType.request(action.id, action.value));
    const { associationTypeId, entityTypeId } = action.value;
    response.data = yield call(
      EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(removeDestinationEntityTypeFromAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeDestinationEntityTypeFromAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(removeDestinationEntityTypeFromAssociationType.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.removeSrcEntityTypeFromAssociationType
 */

function* removeSourceEntityTypeFromAssociationTypeWatcher() :Generator<*, void, *> {

  yield takeEvery(RM_SRC_ET_FROM_AT, removeSourceEntityTypeFromAssociationTypeWorker);
}

function* removeSourceEntityTypeFromAssociationTypeWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    // action.value is expected to be an object containing the AssociationType's EntityType id being updated,
    // and the EntityType id being removed
    yield put(removeSourceEntityTypeFromAssociationType.request(action.id, action.value));
    const { associationTypeId, entityTypeId } = action.value;
    response.data = yield call(
      EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId
    );
    yield put(removeSourceEntityTypeFromAssociationType.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeSourceEntityTypeFromAssociationType.failure(action.id, response.error));
  }
  finally {
    yield put(removeSourceEntityTypeFromAssociationType.finally(action.id));
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

function* createSchemaWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(createSchema.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.createSchema, action.value);
    yield put(createSchema.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createSchema.failure(action.id, response.error));
  }
  finally {
    yield put(createSchema.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.getAllSchemas
 */

function* getAllSchemasWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_SCHEMAS, getAllSchemasWorker);
}

function* getAllSchemasWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(getAllSchemas.request(action.id, action.value));
    response.data = yield call(EntityDataModelApi.getAllSchemas);
    yield put(getAllSchemas.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllSchemas.failure(action.id, response.error));
  }
  finally {
    yield put(getAllSchemas.finally(action.id));
  }

  return response;
}

/*
 * EntityDataModelApi.updateSchema
 */

function* updateSchemaWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_SCHEMA, updateSchemaWorker);
}

function* updateSchemaWorker(seqAction :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(updateSchema.request(seqAction.id, seqAction.value));
    const {
      schemaFqn,
      entityTypeIds,
      propertyTypeIds,
      action
    } = seqAction.value;
    response.data = yield call(
      EntityDataModelApi.updateSchema,
      schemaFqn,
      action,
      entityTypeIds,
      propertyTypeIds
    );
    yield put(updateSchema.success(seqAction.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateSchema.failure(seqAction.id, response.error));
  }
  finally {
    yield put(updateSchema.finally(seqAction.id));
  }

  return response;
}

/*
 *
 * exports
 *
 */

export {
  addDestinationEntityTypeToAssociationTypeWatcher,
  addDestinationEntityTypeToAssociationTypeWorker,
  addPropertyTypeToEntityTypeWatcher,
  addPropertyTypeToEntityTypeWorker,
  addSourceEntityTypeToAssociationTypeWatcher,
  addSourceEntityTypeToAssociationTypeWorker,
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
  removeDestinationEntityTypeFromAssociationTypeWatcher,
  removeDestinationEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSourceEntityTypeFromAssociationTypeWatcher,
  removeSourceEntityTypeFromAssociationTypeWorker,
  reorderEntityTypePropertyTypesWatcher,
  reorderEntityTypePropertyTypesWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker,
  updateSchemaWatcher,
  updateSchemaWorker
};
