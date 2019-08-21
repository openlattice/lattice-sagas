/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PermissionsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_ACL,
  getAcl,
} from './PermissionsApiActions';

/*
 *
 * PermissionsApi.getAcl()
 * PermissionsApiActions.getAcl()
 *
 */

function* getAclWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ACL)) {
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
    yield put(getAcl.request(id, value));
    response.data = yield call(PermissionsApi.getAcl, value);
    yield put(getAcl.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAcl.failure(id, response.error));
  }
  finally {
    yield put(getAcl.finally(id));
  }

  return response;
}

function* getAclWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ACL, getAclWorker);
}

export {
  getAclWatcher,
  getAclWorker,
};
