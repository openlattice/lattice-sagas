/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AuthorizationsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_AUTHORIZATIONS,
  getAuthorizations,
} from './AuthorizationsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * AuthorizationsApi.getAuthorizations
 * AuthorizationsApiActions.getAuthorizations
 *
 */

function* getAuthorizationsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_AUTHORIZATIONS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAuthorizations.request(id, value));
    const response = yield call(AuthorizationsApi.getAuthorizations, value);
    workerResponse = { data: response };
    yield put(getAuthorizations.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAuthorizations.failure(id, error));
  }
  finally {
    yield put(getAuthorizations.finally(id));
  }

  return workerResponse;
}

function* getAuthorizationsWatcher() :Saga<*> {

  yield takeEvery(GET_AUTHORIZATIONS, getAuthorizationsWorker);
}

export {
  getAuthorizationsWatcher,
  getAuthorizationsWorker,
};
