/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PermissionsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_ACL,
  GET_ACL_EXPLANATION,
  UPDATE_ACL,
  UPDATE_ACLS,
  getAcl,
  getAclExplanation,
  updateAcl,
  updateAcls,
} from './PermissionsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * PermissionsApi.getAcl
 * PermissionsApiActions.getAcl
 *
 */

function* getAclWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ACL)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAcl.request(id, value));
    const response = yield call(PermissionsApi.getAcl, value);
    workerResponse = { data: response };
    yield put(getAcl.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAcl.failure(id, error));
  }
  finally {
    yield put(getAcl.finally(id));
  }

  return workerResponse;
}

function* getAclWatcher() :Saga<*> {

  yield takeEvery(GET_ACL, getAclWorker);
}

/*
 *
 * PermissionsApi.getAclExplanation
 * PermissionsApiActions.getAclExplanation
 *
 */

function* getAclExplanationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ACL_EXPLANATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAclExplanation.request(id, value));
    const response = yield call(PermissionsApi.getAclExplanation, value);
    workerResponse = { data: response };
    yield put(getAclExplanation.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAclExplanation.failure(id, error));
  }
  finally {
    yield put(getAclExplanation.finally(id));
  }

  return workerResponse;
}

function* getAclExplanationWatcher() :Saga<*> {

  yield takeEvery(GET_ACL_EXPLANATION, getAclExplanationWorker);
}

/*
 *
 * PermissionsApi.updateAcl
 * PermissionsApiActions.updateAcl
 *
 */

function* updateAclWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ACL)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateAcl.request(id, value));
    const response = yield call(PermissionsApi.updateAcl, value);
    workerResponse = { data: response };
    yield put(updateAcl.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateAcl.failure(id, error));
  }
  finally {
    yield put(updateAcl.finally(id));
  }

  return workerResponse;
}

function* updateAclWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ACL, updateAclWorker);
}

/*
 *
 * PermissionsApi.updateAcls
 * PermissionsApiActions.updateAcls
 *
 */

function* updateAclsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ACLS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateAcls.request(id, value));
    const response = yield call(PermissionsApi.updateAcls, value);
    workerResponse = { data: response };
    yield put(updateAcls.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateAcls.failure(id, error));
  }
  finally {
    yield put(updateAcls.finally(id));
  }

  return workerResponse;
}

function* updateAclsWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ACLS, updateAclsWorker);
}

export {
  getAclExplanationWatcher,
  getAclExplanationWorker,
  getAclWatcher,
  getAclWorker,
  updateAclWatcher,
  updateAclWorker,
  updateAclsWatcher,
  updateAclsWorker,
};
