/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { OrganizationsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  ADD_AUTO_APPROVED_DOMAIN,
  CREATE_ROLE,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  REMOVE_AUTO_APPROVED_DOMAIN,
  addAutoApprovedDomain,
  createRole,
  deleteRole,
  getAllOrganizations,
  getOrganization,
  removeAutoApprovedDomain,
} from './OrganizationsApiActions';

/*
 *
 * OrganizationsApi.addAutoApprovedEmailDomain
 * OrganizationsApiActions.addAutoApprovedDomain
 *
 */

function* addAutoApprovedDomainWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, ADD_AUTO_APPROVED_DOMAIN)) {
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
  const { domain, organizationId } = value;

  try {
    yield put(addAutoApprovedDomain.request(id, value));
    response.data = yield call(OrganizationsApi.addAutoApprovedEmailDomain, organizationId, domain);
    yield put(addAutoApprovedDomain.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addAutoApprovedDomain.failure(id, response.error));
  }
  finally {
    yield put(addAutoApprovedDomain.finally(id));
  }

  return response;
}

function* addAutoApprovedDomainWatcher() :Generator<*, *, *> {

  yield takeEvery(ADD_AUTO_APPROVED_DOMAIN, addAutoApprovedDomainWorker);
}

/*
 *
 * OrganizationsApi.createRole
 * OrganizationsApiActions.createRole
 *
 */

function* createRoleWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, CREATE_ROLE)) {
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
    yield put(createRole.request(id, value));
    response.data = yield call(OrganizationsApi.createRole, value);
    yield put(createRole.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createRole.failure(id, response.error));
  }
  finally {
    yield put(createRole.finally(id));
  }

  return response;
}

function* createRoleWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ROLE, createRoleWorker);
}

/*
 *
 * OrganizationsApi.deleteRole
 * OrganizationsApiActions.deleteRole
 *
 */

function* deleteRoleWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, DELETE_ROLE)) {
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
  const { organizationId, roleId } = value;

  try {
    yield put(deleteRole.request(id, value));
    response.data = yield call(OrganizationsApi.deleteRole, organizationId, roleId);
    yield put(deleteRole.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteRole.failure(id, response.error));
  }
  finally {
    yield put(deleteRole.finally(id));
  }

  return response;
}

function* deleteRoleWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ROLE, deleteRoleWorker);
}

/*
 *
 * OrganizationsApi.getAllOrganizations
 * OrganizationsApiActions.getAllOrganizations
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
 * OrganizationsApiActions.getOrganization
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

/*
 *
 * OrganizationsApi.removeAutoApprovedEmailDomain
 * OrganizationsApiActions.removeAutoApprovedDomain
 *
 */

function* removeAutoApprovedDomainWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REMOVE_AUTO_APPROVED_DOMAIN)) {
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
  const { domain, organizationId } = value;

  try {
    yield put(removeAutoApprovedDomain.request(id, value));
    response.data = yield call(OrganizationsApi.removeAutoApprovedEmailDomain, organizationId, domain);
    yield put(removeAutoApprovedDomain.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeAutoApprovedDomain.failure(id, response.error));
  }
  finally {
    yield put(removeAutoApprovedDomain.finally(id));
  }

  return response;
}

function* removeAutoApprovedDomainWatcher() :Generator<*, *, *> {

  yield takeEvery(REMOVE_AUTO_APPROVED_DOMAIN, removeAutoApprovedDomainWorker);
}

export {
  addAutoApprovedDomainWatcher,
  addAutoApprovedDomainWorker,
  createRoleWatcher,
  createRoleWorker,
  deleteRoleWatcher,
  deleteRoleWorker,
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
  removeAutoApprovedDomainWatcher,
  removeAutoApprovedDomainWorker,
};
