/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataSetsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS,
  getOrganizationDataSets,
  getOrganizationDataSetsWithColumns,
} from './DataSetsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

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
    const response = yield call(DataSetsApi.getOrganizationDataSets, value);
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
 * DataSetsApi.getOrganizationDataSetsWithColumns
 * DataSetsApiActions.getOrganizationDataSetsWithColumns
 *
 */

function* getOrganizationDataSetsWithColumnsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDataSetsWithColumns.request(id, value));
    const response = yield call(DataSetsApi.getOrganizationDataSetsWithColumns, value);
    workerResponse = { data: response };
    yield put(getOrganizationDataSetsWithColumns.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDataSetsWithColumns.failure(id, error));
  }
  finally {
    yield put(getOrganizationDataSetsWithColumns.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDataSetsWithColumnsWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS, getOrganizationDataSetsWithColumnsWorker);
}

export {
  getOrganizationDataSetsWatcher,
  getOrganizationDataSetsWorker,
  getOrganizationDataSetsWithColumnsWatcher,
  getOrganizationDataSetsWithColumnsWorker,
};
