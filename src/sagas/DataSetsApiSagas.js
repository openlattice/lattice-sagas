/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataSetsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_ORGANIZATION_DATA_SET,
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SET_DATA,
  getOrganizationDataSet,
  getOrganizationDataSets,
  getOrganizationDataSetData,
} from './DataSetsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * DataSetsApi.getOrganizationDataSet
 * DataSetsApiActions.getOrganizationDataSet
 *
 */

function* getOrganizationDataSetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATA_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDataSet.request(id, value));
    const { columns, dataSetId, organizationId } = value;
    const response = yield call(DataSetsApi.getOrganizationDataSet, organizationId, dataSetId, columns);
    workerResponse = { data: response };
    yield put(getOrganizationDataSet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDataSet.failure(id, error));
  }
  finally {
    yield put(getOrganizationDataSet.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDataSetWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATA_SET, getOrganizationDataSetWorker);
}

/*
 *
 * DataSetsApi.getOrganizationDataSets
 * DataSetsApiActions.getOrganizationDataSets
 *
 */

function* getOrganizationDataSetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATA_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDataSets.request(id, value));
    const { columns, organizationId } = value;
    const response = yield call(DataSetsApi.getOrganizationDataSets, organizationId, columns);
    workerResponse = { data: response };
    yield put(getOrganizationDataSets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDataSets.failure(id, error));
  }
  finally {
    yield put(getOrganizationDataSets.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDataSetsWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATA_SETS, getOrganizationDataSetsWorker);
}

/*
 *
 * DataSetsApi.getOrganizationDataSetData
 * DataSetsApiActions.getOrganizationDataSetData
 *
 */

function* getOrganizationDataSetDataWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATA_SET_DATA)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDataSetData.request(id, value));
    const { count, dataSetId, organizationId } = value;
    const response = yield call(DataSetsApi.getOrganizationDataSetData, organizationId, dataSetId, count);
    workerResponse = { data: response };
    yield put(getOrganizationDataSetData.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDataSetData.failure(id, error));
  }
  finally {
    yield put(getOrganizationDataSetData.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDataSetDataWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATA_SET_DATA, getOrganizationDataSetDataWorker);
}

export {
  getOrganizationDataSetWatcher,
  getOrganizationDataSetWorker,
  getOrganizationDataSetsWatcher,
  getOrganizationDataSetsWorker,
  getOrganizationDataSetDataWatcher,
  getOrganizationDataSetDataWorker,
};
