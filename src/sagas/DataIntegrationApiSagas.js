/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataIntegrationApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_ENTITY_KEY_IDS,
  getEntityKeyIds,
} from './DataIntegrationApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * DataIntegrationApi.getEntityKeyIds
 * DataIntegrationApiActions.getEntityKeyIds
 *
 */

function* getEntityKeyIdsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ENTITY_KEY_IDS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getEntityKeyIds.request(id, value));
    const response = yield call(DataIntegrationApi.getEntityKeyIds, value);
    workerResponse = { data: response };
    yield put(getEntityKeyIds.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getEntityKeyIds.failure(id, error));
  }
  finally {
    yield put(getEntityKeyIds.finally(id));
  }

  return workerResponse;
}

function* getEntityKeyIdsWatcher() :Saga<*> {

  yield takeEvery(GET_ENTITY_KEY_IDS, getEntityKeyIdsWorker);
}

export {
  getEntityKeyIdsWatcher,
  getEntityKeyIdsWorker,
};
