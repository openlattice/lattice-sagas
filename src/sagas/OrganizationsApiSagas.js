/*
 * @flow
 */

import { OrganizationsApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  getAllOrganizations,
  getOrganization,
} from './OrganizationsApiActions';

/*
 *
 * OrganizationsApi.getAllOrganizations
 *
 */

function* getAllOrganizationsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ORGANIZATIONS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id } = seqAction;
  const response :Object = {};

  try {
    yield put(getAllOrganizations.request(id));
    response.data = yield call(OrganizationsApi.getAllOrganizations);
    yield put(getAllOrganizations.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllOrganizations.failure(id, response.error));
  }
  finally {
    yield put(getAllOrganizations.finally(id));
  }

  return response;
}

function* getAllOrganizationsWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ALL_ORGANIZATIONS, getAllOrganizationsWorker);
}

/*
 *
 * OrganizationsApi.getOrganization
 *
 */

function* getOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ORGANIZATION)) {
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
    yield put(getOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.getOrganization, value);
    yield put(getOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getOrganization.failure(id, response.error));
  }
  finally {
    yield put(getOrganization.finally(id));
  }

  return response;
}

function* getOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ORGANIZATION, getOrganizationWorker);
}

export {
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
};
