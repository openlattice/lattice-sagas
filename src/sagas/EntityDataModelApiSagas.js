/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { EntityDataModelApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

import {
  ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_ENTITY_TYPES,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ASSOCIATION_TYPE,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  GET_SCHEMA,
  REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  UPDATE_ASSOCIATION_TYPE_METADATA,
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
  getAllAssociationEntityTypes,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getAssociationType,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntityType,
  getPropertyType,
  getSchema,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  updateAssociationTypeMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
} from './EntityDataModelApiActions';

/*
 *
 * EntityDataModelApi.addDestinationEntityTypeToAssociationType
 * EntityDataModelApiActions.addDestinationEntityTypeToAssociationType
 *
 */

function* addDestinationEntityTypeToAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addDestinationEntityTypeToAssociationType.request(id, value));
    const { associationTypeId, entityTypeId } = value;
    const response = yield call(
      EntityDataModelApi.addDestinationEntityTypeToAssociationType,
      associationTypeId,
      entityTypeId,
    );
    workerResponse = { data: response };
    yield put(addDestinationEntityTypeToAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addDestinationEntityTypeToAssociationType.failure(id, error));
  }
  finally {
    yield put(addDestinationEntityTypeToAssociationType.finally(id));
  }

  return workerResponse;
}

function* addDestinationEntityTypeToAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE, addDestinationEntityTypeToAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.addPropertyTypeToEntityType
 * EntityDataModelApiActions.addPropertyTypeToEntityType
 *
 */

function* addPropertyTypeToEntityTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_PROPERTY_TYPE_TO_ENTITY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addPropertyTypeToEntityType.request(id, value));
    const { entityTypeId, propertyTypeId } = value;
    const response = yield call(EntityDataModelApi.addPropertyTypeToEntityType, entityTypeId, propertyTypeId);
    workerResponse = { data: response };
    yield put(addPropertyTypeToEntityType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addPropertyTypeToEntityType.failure(id, error));
  }
  finally {
    yield put(addPropertyTypeToEntityType.finally(id));
  }

  return workerResponse;
}

function* addPropertyTypeToEntityTypeWatcher() :Saga<*> {

  yield takeEvery(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE, addPropertyTypeToEntityTypeWorker);
}

/*
 *
 * EntityDataModelApi.addSourceEntityTypeToAssociationType
 * EntityDataModelApiActions.addSourceEntityTypeToAssociationType
 *
 */

function* addSourceEntityTypeToAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addSourceEntityTypeToAssociationType.request(id, value));
    const { associationTypeId, entityTypeId } = value;
    const response = yield call(
      EntityDataModelApi.addSourceEntityTypeToAssociationType,
      associationTypeId,
      entityTypeId,
    );
    workerResponse = { data: response };
    yield put(addSourceEntityTypeToAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addSourceEntityTypeToAssociationType.failure(id, error));
  }
  finally {
    yield put(addSourceEntityTypeToAssociationType.finally(id));
  }

  return workerResponse;
}

function* addSourceEntityTypeToAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE, addSourceEntityTypeToAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.createAssociationType
 * EntityDataModelApiActions.createAssociationType
 *
 */

function* createAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createAssociationType.request(id, value));
    const response = yield call(EntityDataModelApi.createAssociationType, value);
    workerResponse = { data: response };
    yield put(createAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createAssociationType.failure(id, error));
  }
  finally {
    yield put(createAssociationType.finally(id));
  }

  return workerResponse;
}

function* createAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(CREATE_ASSOCIATION_TYPE, createAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.createEntityType
 * EntityDataModelApiActions.createEntityType
 *
 */

function* createEntityTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ENTITY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createEntityType.request(id, value));
    const response = yield call(EntityDataModelApi.createEntityType, value);
    workerResponse = { data: response };
    yield put(createEntityType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createEntityType.failure(id, error));
  }
  finally {
    yield put(createEntityType.finally(id));
  }

  return workerResponse;
}

function* createEntityTypeWatcher() :Saga<*> {

  yield takeEvery(CREATE_ENTITY_TYPE, createEntityTypeWorker);
}

/*
 *
 * EntityDataModelApi.createPropertyType
 * EntityDataModelApiActions.createPropertyType
 *
 */

function* createPropertyTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_PROPERTY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createPropertyType.request(id, value));
    const response = yield call(EntityDataModelApi.createPropertyType, value);
    workerResponse = { data: response };
    yield put(createPropertyType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createPropertyType.failure(id, error));
  }
  finally {
    yield put(createPropertyType.finally(id));
  }

  return workerResponse;
}

function* createPropertyTypeWatcher() :Saga<*> {

  yield takeEvery(CREATE_PROPERTY_TYPE, createPropertyTypeWorker);
}

/*
 *
 * EntityDataModelApi.createSchema
 * EntityDataModelApiActions.createSchema
 *
 */

function* createSchemaWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_SCHEMA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createSchema.request(id, value));
    const response = yield call(EntityDataModelApi.createSchema, value);
    workerResponse = { data: response };
    yield put(createSchema.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createSchema.failure(id, error));
  }
  finally {
    yield put(createSchema.finally(id));
  }

  return workerResponse;
}

function* createSchemaWatcher() :Saga<*> {

  yield takeEvery(CREATE_SCHEMA, createSchemaWorker);
}

/*
 *
 * EntityDataModelApi.deleteAssociationType
 * EntityDataModelApiActions.deleteAssociationType
 *
 */

function* deleteAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteAssociationType.request(id, value));
    const response = yield call(EntityDataModelApi.deleteAssociationType, value);
    workerResponse = { data: response };
    yield put(deleteAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteAssociationType.failure(id, error));
  }
  finally {
    yield put(deleteAssociationType.finally(id));
  }

  return workerResponse;
}

function* deleteAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(DELETE_ASSOCIATION_TYPE, deleteAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.deleteEntityType
 * EntityDataModelApiActions.deleteEntityType
 *
 */

function* deleteEntityTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ENTITY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteEntityType.request(id, value));
    const response = yield call(EntityDataModelApi.deleteEntityType, value);
    workerResponse = { data: response };
    yield put(deleteEntityType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteEntityType.failure(id, error));
  }
  finally {
    yield put(deleteEntityType.finally(id));
  }

  return workerResponse;
}

function* deleteEntityTypeWatcher() :Saga<*> {

  yield takeEvery(DELETE_ENTITY_TYPE, deleteEntityTypeWorker);
}

/*
 *
 * EntityDataModelApi.deletePropertyType
 * EntityDataModelApiActions.deletePropertyType
 *
 */

function* deletePropertyTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_PROPERTY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deletePropertyType.request(id, value));
    const response = yield call(EntityDataModelApi.deletePropertyType, value);
    workerResponse = { data: response };
    yield put(deletePropertyType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deletePropertyType.failure(id, error));
  }
  finally {
    yield put(deletePropertyType.finally(id));
  }

  return workerResponse;
}

function* deletePropertyTypeWatcher() :Saga<*> {

  yield takeEvery(DELETE_PROPERTY_TYPE, deletePropertyTypeWorker);
}

/*
 *
 * EntityDataModelApi.getAllAssociationEntityTypes
 * EntityDataModelApiActions.getAllAssociationEntityTypes
 *
 */

function* getAllAssociationEntityTypesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ASSOCIATION_ENTITY_TYPES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllAssociationEntityTypes.request(id));
    const response = yield call(EntityDataModelApi.getAllAssociationEntityTypes);
    workerResponse = { data: response };
    yield put(getAllAssociationEntityTypes.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllAssociationEntityTypes.failure(id, error));
  }
  finally {
    yield put(getAllAssociationEntityTypes.finally(id));
  }

  return workerResponse;
}

function* getAllAssociationEntityTypesWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ASSOCIATION_ENTITY_TYPES, getAllAssociationEntityTypesWorker);
}

/*
 *
 * EntityDataModelApi.getAllAssociationTypes
 * EntityDataModelApiActions.getAllAssociationTypes
 *
 */

function* getAllAssociationTypesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ASSOCIATION_TYPES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllAssociationTypes.request(id));
    const response = yield call(EntityDataModelApi.getAllAssociationTypes);
    workerResponse = { data: response };
    yield put(getAllAssociationTypes.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllAssociationTypes.failure(id, error));
  }
  finally {
    yield put(getAllAssociationTypes.finally(id));
  }

  return workerResponse;
}

function* getAllAssociationTypesWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ASSOCIATION_TYPES, getAllAssociationTypesWorker);
}

/*
 *
 * EntityDataModelApi.getAllEntityTypes
 * EntityDataModelApiActions.getAllEntityTypes
 *
 */

function* getAllEntityTypesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ENTITY_TYPES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllEntityTypes.request(id));
    const response = yield call(EntityDataModelApi.getAllEntityTypes);
    workerResponse = { data: response };
    yield put(getAllEntityTypes.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllEntityTypes.failure(id, error));
  }
  finally {
    yield put(getAllEntityTypes.finally(id));
  }

  return workerResponse;
}

function* getAllEntityTypesWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);
}

/*
 *
 * EntityDataModelApi.getAllPropertyTypes
 * EntityDataModelApiActions.getAllPropertyTypes
 *
 */

function* getAllPropertyTypesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_PROPERTY_TYPES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllPropertyTypes.request(id));
    const response = yield call(EntityDataModelApi.getAllPropertyTypes);
    workerResponse = { data: response };
    yield put(getAllPropertyTypes.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllPropertyTypes.failure(id, error));
  }
  finally {
    yield put(getAllPropertyTypes.finally(id));
  }

  return workerResponse;
}

function* getAllPropertyTypesWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);
}

/*
 *
 * EntityDataModelApi.getAllSchemas
 * EntityDataModelApiActions.getAllSchemas
 *
 */

function* getAllSchemasWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_SCHEMAS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllSchemas.request(id));
    const response = yield call(EntityDataModelApi.getAllSchemas);
    workerResponse = { data: response };
    yield put(getAllSchemas.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllSchemas.failure(id, error));
  }
  finally {
    yield put(getAllSchemas.finally(id));
  }

  return workerResponse;
}

function* getAllSchemasWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_SCHEMAS, getAllSchemasWorker);
}

/*
 *
 * EntityDataModelApi.getAssociationType
 * EntityDataModelApiActions.getAssociationType
 *
 */

function* getAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAssociationType.request(id, value));
    const response = yield call(EntityDataModelApi.getAssociationType, value);
    workerResponse = { data: response };
    yield put(getAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAssociationType.failure(id, error));
  }
  finally {
    yield put(getAssociationType.finally(id));
  }

  return workerResponse;
}

function* getAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(GET_ASSOCIATION_TYPE, getAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.getEntityDataModel
 * EntityDataModelApiActions.getEntityDataModel
 *
 */

function* getEntityDataModelWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_DATA_MODEL)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getEntityDataModel.request(id));
    const response = yield call(EntityDataModelApi.getEntityDataModel);
    workerResponse = { data: response };
    yield put(getEntityDataModel.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntityDataModel.failure(id, error));
  }
  finally {
    yield put(getEntityDataModel.finally(id));
  }

  return workerResponse;
}

function* getEntityDataModelWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_DATA_MODEL, getEntityDataModelWorker);
}

/*
 *
 * EntityDataModelApi.getEntityDataModelProjection
 * EntityDataModelApiActions.getEntityDataModelProjection
 *
 */

function* getEntityDataModelProjectionWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_DATA_MODEL_PROJECTION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntityDataModelProjection.request(id, value));
    const response = yield call(EntityDataModelApi.getEntityDataModelProjection, value);
    workerResponse = { data: response };
    yield put(getEntityDataModelProjection.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntityDataModelProjection.failure(id, error));
  }
  finally {
    yield put(getEntityDataModelProjection.finally(id));
  }

  return workerResponse;
}

function* getEntityDataModelProjectionWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_PROJECTION, getEntityDataModelProjectionWorker);
}

/*
 *
 * EntityDataModelApi.getEntityType
 * EntityDataModelApiActions.getEntityType
 *
 */

function* getEntityTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntityType.request(id, value));
    const response = yield call(EntityDataModelApi.getEntityType, value);
    workerResponse = { data: response };
    yield put(getEntityType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntityType.failure(id, error));
  }
  finally {
    yield put(getEntityType.finally(id));
  }

  return workerResponse;
}

function* getEntityTypeWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_TYPE, getEntityTypeWorker);
}

/*
 *
 * EntityDataModelApi.getPropertyType
 * EntityDataModelApiActions.getPropertyType
 *
 */

function* getPropertyTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_PROPERTY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getPropertyType.request(id, value));
    const response = yield call(EntityDataModelApi.getPropertyType, value);
    workerResponse = { data: response };
    yield put(getPropertyType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getPropertyType.failure(id, error));
  }
  finally {
    yield put(getPropertyType.finally(id));
  }

  return workerResponse;
}

function* getPropertyTypeWatcher() :Saga<*> {

  yield takeEvery(GET_PROPERTY_TYPE, getPropertyTypeWorker);
}

/*
 *
 * EntityDataModelApi.getSchema
 * EntityDataModelApiActions.getSchema
 *
 */

function* getSchemaWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_SCHEMA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getSchema.request(id, value));
    const response = yield call(EntityDataModelApi.getSchema, value);
    workerResponse = { data: response };
    yield put(getSchema.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getSchema.failure(id, error));
  }
  finally {
    yield put(getSchema.finally(id));
  }

  return workerResponse;
}

function* getSchemaWatcher() :Saga<*> {

  yield takeEvery(GET_SCHEMA, getSchemaWorker);
}

/*
 *
 * EntityDataModelApi.removeDestinationEntityTypeFromAssociationType
 * EntityDataModelApiActions.removeDestinationEntityTypeFromAssociationType
 *
 */

function* removeDestinationEntityTypeFromAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeDestinationEntityTypeFromAssociationType.request(id, value));
    const { associationTypeId, entityTypeId } = value;
    const response = yield call(
      EntityDataModelApi.removeDestinationEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId,
    );
    workerResponse = { data: response };
    yield put(removeDestinationEntityTypeFromAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeDestinationEntityTypeFromAssociationType.failure(id, error));
  }
  finally {
    yield put(removeDestinationEntityTypeFromAssociationType.finally(id));
  }

  return workerResponse;
}

function* removeDestinationEntityTypeFromAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(
    REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
    removeDestinationEntityTypeFromAssociationTypeWorker,
  );
}

/*
 *
 * EntityDataModelApi.removePropertyTypeFromEntityType
 * EntityDataModelApiActions.removePropertyTypeFromEntityType
 *
 */

function* removePropertyTypeFromEntityTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removePropertyTypeFromEntityType.request(id, value));
    const { entityTypeId, propertyTypeId } = value;
    const response = yield call(EntityDataModelApi.removePropertyTypeFromEntityType, entityTypeId, propertyTypeId);
    workerResponse = { data: response };
    yield put(removePropertyTypeFromEntityType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removePropertyTypeFromEntityType.failure(id, error));
  }
  finally {
    yield put(removePropertyTypeFromEntityType.finally(id));
  }

  return workerResponse;
}

function* removePropertyTypeFromEntityTypeWatcher() :Saga<*> {

  yield takeEvery(REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE, removePropertyTypeFromEntityTypeWorker);
}

/*
 *
 * EntityDataModelApi.removeSourceEntityTypeFromAssociationType
 * EntityDataModelApiActions.removeSourceEntityTypeFromAssociationType
 *
 */

function* removeSourceEntityTypeFromAssociationTypeWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeSourceEntityTypeFromAssociationType.request(id, value));
    const { associationTypeId, entityTypeId } = value;
    const response = yield call(
      EntityDataModelApi.removeSourceEntityTypeFromAssociationType,
      associationTypeId,
      entityTypeId,
    );
    workerResponse = { data: response };
    yield put(removeSourceEntityTypeFromAssociationType.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeSourceEntityTypeFromAssociationType.failure(id, error));
  }
  finally {
    yield put(removeSourceEntityTypeFromAssociationType.finally(id));
  }

  return workerResponse;
}

function* removeSourceEntityTypeFromAssociationTypeWatcher() :Saga<*> {

  yield takeEvery(REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE, removeSourceEntityTypeFromAssociationTypeWorker);
}

/*
 *
 * EntityDataModelApi.updateAssociationTypeMetaData
 * EntityDataModelApiActions.updateAssociationTypeMetaData
 *
 */

function* updateAssociationTypeMetaDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ASSOCIATION_TYPE_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateAssociationTypeMetaData.request(id, value));
    const { associationTypeId, metadata } = value;
    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    const response = yield call(EntityDataModelApi.updateEntityTypeMetaData, associationTypeId, metadata);
    workerResponse = { data: response };
    yield put(updateAssociationTypeMetaData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateAssociationTypeMetaData.failure(id, error));
  }
  finally {
    yield put(updateAssociationTypeMetaData.finally(id));
  }

  return workerResponse;
}

function* updateAssociationTypeMetaDataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ASSOCIATION_TYPE_METADATA, updateAssociationTypeMetaDataWorker);
}

/*
 *
 * EntityDataModelApi.updateEntityTypeMetaData
 * EntityDataModelApiActions.updateEntityTypeMetaData
 *
 */

function* updateEntityTypeMetaDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ENTITY_TYPE_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateEntityTypeMetaData.request(id, value));
    const { entityTypeId, metadata } = value;
    const response = yield call(EntityDataModelApi.updateEntityTypeMetaData, entityTypeId, metadata);
    workerResponse = { data: response };
    yield put(updateEntityTypeMetaData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateEntityTypeMetaData.failure(id, error));
  }
  finally {
    yield put(updateEntityTypeMetaData.finally(id));
  }

  return workerResponse;
}

function* updateEntityTypeMetaDataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ENTITY_TYPE_METADATA, updateEntityTypeMetaDataWorker);
}

/*
 *
 * EntityDataModelApi.updatePropertyTypeMetaData
 * EntityDataModelApiActions.updatePropertyTypeMetaData
 *
 */

function* updatePropertyTypeMetaDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_PROPERTY_TYPE_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updatePropertyTypeMetaData.request(id, value));
    const { propertyTypeId, metadata } = value;
    const response = yield call(EntityDataModelApi.updatePropertyTypeMetaData, propertyTypeId, metadata);
    workerResponse = { data: response };
    yield put(updatePropertyTypeMetaData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updatePropertyTypeMetaData.failure(id, error));
  }
  finally {
    yield put(updatePropertyTypeMetaData.finally(id));
  }

  return workerResponse;
}

function* updatePropertyTypeMetaDataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_PROPERTY_TYPE_METADATA, updatePropertyTypeMetaDataWorker);
}

/*
 *
 * EntityDataModelApi.updateSchema
 * EntityDataModelApiActions.updateSchema
 *
 */

function* updateSchemaWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_SCHEMA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateSchema.request(id, value));
    const response = yield call(EntityDataModelApi.updateSchema, value);
    workerResponse = { data: response };
    yield put(updateSchema.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateSchema.failure(id, error));
  }
  finally {
    yield put(updateSchema.finally(id));
  }

  return workerResponse;
}

function* updateSchemaWatcher() :Saga<*> {

  yield takeEvery(UPDATE_SCHEMA, updateSchemaWorker);
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
  getAllAssociationEntityTypesWatcher,
  getAllAssociationEntityTypesWorker,
  getAllAssociationTypesWatcher,
  getAllAssociationTypesWorker,
  getAllEntityTypesWatcher,
  getAllEntityTypesWorker,
  getAllPropertyTypesWatcher,
  getAllPropertyTypesWorker,
  getAllSchemasWatcher,
  getAllSchemasWorker,
  getAssociationTypeWatcher,
  getAssociationTypeWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker,
  getSchemaWatcher,
  getSchemaWorker,
  removeDestinationEntityTypeFromAssociationTypeWatcher,
  removeDestinationEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSourceEntityTypeFromAssociationTypeWatcher,
  removeSourceEntityTypeFromAssociationTypeWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker,
  updateSchemaWatcher,
  updateSchemaWorker,
};
