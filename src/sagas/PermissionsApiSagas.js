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
  UPDATE_ACL,
  getAcl,
  updateAcl,
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

/*
 *
 * PermissionsApi.updateAcl()
 * PermissionsApiActions.updateAcl()
 *
 */

function* updateAclWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, UPDATE_ACL)) {
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
    yield put(updateAcl.request(id, value));
    response.data = yield call(PermissionsApi.updateAcl, value);
    yield put(updateAcl.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(updateAcl.failure(id, response.error));
  }
  finally {
    yield put(updateAcl.finally(id));
  }

  return response;
}

function* updateAclWatcher() :Generator<*, void, *> {

  yield takeEvery(UPDATE_ACL, updateAclWorker);
}

export {
  getAclWatcher,
  getAclWorker,
  updateAclWatcher,
  updateAclWorker,
};
