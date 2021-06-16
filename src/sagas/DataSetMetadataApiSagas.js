/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataSetMetadataApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_DATA_SETS_METADATA,
  GET_DATA_SET_COLUMNS_METADATA,
  GET_DATA_SET_COLUMN_METADATA,
  GET_DATA_SET_METADATA,
  GET_ORGANIZATION_DATA_SETS_METADATA,
  UPDATE_DATA_SET_COLUMN_METADATA,
  UPDATE_DATA_SET_METADATA,
  getDataSetColumnMetadata,
  getDataSetColumnsMetadata,
  getDataSetMetadata,
  getDataSetsMetadata,
  getOrganizationDataSetsMetadata,
  updateDataSetColumnMetadata,
  updateDataSetMetadata,
} from './DataSetMetadataApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * DataSetMetadataApi.getDataSetMetadata
 * DataSetMetadataApiActions.getDataSetMetadata
 *
 */

function* getDataSetMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_DATA_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getDataSetMetadata.request(id, value));
    const response = yield call(DataSetMetadataApi.getDataSetMetadata, value);
    workerResponse = { data: response };
    yield put(getDataSetMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getDataSetMetadata.failure(id, error));
  }
  finally {
    yield put(getDataSetMetadata.finally(id));
  }

  return workerResponse;
}

function* getDataSetMetadataWatcher() :Saga<*> {

  yield takeEvery(GET_DATA_SET_METADATA, getDataSetMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.getDataSetsMetadata
 * DataSetMetadataApiActions.getDataSetsMetadata
 *
 */

function* getDataSetsMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_DATA_SETS_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getDataSetsMetadata.request(id, value));
    const response = yield call(DataSetMetadataApi.getDataSetsMetadata, value);
    workerResponse = { data: response };
    yield put(getDataSetsMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getDataSetsMetadata.failure(id, error));
  }
  finally {
    yield put(getDataSetsMetadata.finally(id));
  }

  return workerResponse;
}

function* getDataSetsMetadataWatcher() :Saga<*> {

  yield takeEvery(GET_DATA_SETS_METADATA, getDataSetsMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.getDataSetColumnMetadata
 * DataSetMetadataApiActions.getDataSetColumnMetadata
 *
 */

function* getDataSetColumnMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_DATA_SET_COLUMN_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getDataSetColumnMetadata.request(id, value));
    const { columnId, dataSetId } = action.value;
    const response = yield call(DataSetMetadataApi.getDataSetColumnMetadata, dataSetId, columnId);
    workerResponse = { data: response };
    yield put(getDataSetColumnMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getDataSetColumnMetadata.failure(id, error));
  }
  finally {
    yield put(getDataSetColumnMetadata.finally(id));
  }

  return workerResponse;
}

function* getDataSetColumnMetadataWatcher() :Saga<*> {

  yield takeEvery(GET_DATA_SET_COLUMN_METADATA, getDataSetColumnMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.getDataSetColumnsMetadata
 * DataSetMetadataApiActions.getDataSetColumnsMetadata
 *
 */

function* getDataSetColumnsMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_DATA_SET_COLUMNS_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getDataSetColumnsMetadata.request(id, value));
    const response = yield call(DataSetMetadataApi.getDataSetColumnsMetadata, value);
    workerResponse = { data: response };
    yield put(getDataSetColumnsMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getDataSetColumnsMetadata.failure(id, error));
  }
  finally {
    yield put(getDataSetColumnsMetadata.finally(id));
  }

  return workerResponse;
}

function* getDataSetColumnsMetadataWatcher() :Saga<*> {

  yield takeEvery(GET_DATA_SET_COLUMNS_METADATA, getDataSetColumnsMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.getOrganizationDataSetsMetadata
 * DataSetMetadataApiActions.getOrganizationDataSetsMetadata
 *
 */

function* getOrganizationDataSetsMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATA_SETS_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDataSetsMetadata.request(id, value));
    const response = yield call(DataSetMetadataApi.getOrganizationDataSetsMetadata, value);
    workerResponse = { data: response };
    yield put(getOrganizationDataSetsMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDataSetsMetadata.failure(id, error));
  }
  finally {
    yield put(getOrganizationDataSetsMetadata.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDataSetsMetadataWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATA_SETS_METADATA, getOrganizationDataSetsMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.updateDataSetMetadata
 * DataSetMetadataApiActions.updateDataSetMetadata
 *
 */

function* updateDataSetMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_DATA_SET_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateDataSetMetadata.request(id, value));
    const { dataSetId, metadata } = action.value;
    const response = yield call(DataSetMetadataApi.updateDataSetMetadata, dataSetId, metadata);
    workerResponse = { data: response };
    yield put(updateDataSetMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateDataSetMetadata.failure(id, error));
  }
  finally {
    yield put(updateDataSetMetadata.finally(id));
  }

  return workerResponse;
}

function* updateDataSetMetadataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_DATA_SET_METADATA, updateDataSetMetadataWorker);
}

/*
 *
 * DataSetMetadataApi.updateDataSetColumnMetadata
 * DataSetMetadataApiActions.updateDataSetColumnMetadata
 *
 */

function* updateDataSetColumnMetadataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_DATA_SET_COLUMN_METADATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateDataSetColumnMetadata.request(id, value));
    const { columnId, dataSetId, metadata } = action.value;
    const response = yield call(DataSetMetadataApi.updateDataSetColumnMetadata, dataSetId, columnId, metadata);
    workerResponse = { data: response };
    yield put(updateDataSetColumnMetadata.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateDataSetColumnMetadata.failure(id, error));
  }
  finally {
    yield put(updateDataSetColumnMetadata.finally(id));
  }

  return workerResponse;
}

function* updateDataSetColumnMetadataWatcher() :Saga<*> {

  yield takeEvery(UPDATE_DATA_SET_COLUMN_METADATA, updateDataSetColumnMetadataWorker);
}

export {
  getDataSetColumnMetadataWatcher,
  getDataSetColumnMetadataWorker,
  getDataSetColumnsMetadataWatcher,
  getDataSetColumnsMetadataWorker,
  getDataSetMetadataWatcher,
  getDataSetMetadataWorker,
  getDataSetsMetadataWatcher,
  getDataSetsMetadataWorker,
  getOrganizationDataSetsMetadataWatcher,
  getOrganizationDataSetsMetadataWorker,
  updateDataSetColumnMetadataWatcher,
  updateDataSetColumnMetadataWorker,
  updateDataSetMetadataWatcher,
  updateDataSetMetadataWorker,
};
