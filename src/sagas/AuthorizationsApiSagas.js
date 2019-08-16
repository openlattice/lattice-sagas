/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AuthorizationApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_AUTHORIZATIONS,
  getAuthorizations,
} from './AuthorizationsApiActions';

/*
 *
 * AuthorizationApi.checkAuthorizations
 * AuthorizationsApiActions.getAuthorizations
 *
 */

function* getAuthorizationsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_AUTHORIZATIONS)) {
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
    yield put(getAuthorizations.request(id, value));
    response.data = yield call(AuthorizationApi.checkAuthorizations, value);
    yield put(getAuthorizations.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAuthorizations.failure(id, response.error));
  }
  finally {
    yield put(getAuthorizations.finally(id));
  }

  return response;
}

function* getAuthorizationsWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_AUTHORIZATIONS, getAuthorizationsWorker);
}

export {
  getAuthorizationsWatcher,
  getAuthorizationsWorker,
};
